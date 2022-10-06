use anchor_lang::prelude::*;


pub mod state;
pub mod error;

use state::*;
use error::*;

use anchor_spl::token::{self, Mint, SetAuthority, Token, TokenAccount};
use spl_token::instruction::AuthorityType;

const OFFER_CREATE_PREFIX: &[u8] = b"offer_create";
const OFFER_SUPPLY_PREFIX: &[u8] = b"offer_supply";
const OFFER_DEMAND_PREFIX: &[u8] = b"offer_demand";

declare_id!("BQNWkSGD2TtpGVLq4TLcpWgEb2B2uSimixxVYbXP7NR9");

#[program]
pub mod nft_dex {
    use super::*;

    pub fn initialize_create_account(ctx: Context<InitializeCreateAccount>,offer_bump:u8) -> Result<()> {
        let owner = &mut ctx.accounts.owner;
        let offer_create = &mut ctx.accounts.offer_create;

        offer_create.owner = owner.to_account_info().key();
        offer_create.bump = offer_bump;
        offer_create.index = 0;

        Ok(())
    }

    pub fn initialize_supply_account(ctx: Context<InitializeSupplyAccount>,offer_bump:u8) -> Result<()> {
        let owner = &mut ctx.accounts.owner;
        let offer_supply = &mut ctx.accounts.offer_supply;
        
        offer_supply.owner = owner.to_account_info().key();
        offer_supply.bump = offer_bump;

        Ok(())
    }

    pub fn initialize_demand_account(ctx: Context<InitializeDemandAccount>,offer_bump:u8) -> Result<()> {
        let owner = &mut ctx.accounts.owner;
        let offer_demand = &mut ctx.accounts.offer_demand;
        
        offer_demand.owner = owner.to_account_info().key();
        offer_demand.bump = offer_bump;

        Ok(())
    }

    pub fn offer_create(ctx:Context<OfferCreate>,datetime:i64,nft_supply_id:Pubkey,nft_demand_id:Pubkey) -> Result<()> {
        let offer_create = &mut ctx.accounts.offer_create;
        let offer_supply = &mut ctx.accounts.offer_supply;
        let offer_demand = &mut ctx.accounts.offer_demand;
        let owner = &mut ctx.accounts.owner;
        let nft_token_account = &mut ctx.accounts.nft_token_account;
        let clock = &ctx.accounts.clock;
        let token_program = &ctx.accounts.token_program;

        let index:u32 = offer_create.index + 1;

        let offer_item = OfferItem{
            offer_id : index,
            creator : owner.to_account_info().key(),
            created : clock.unix_timestamp,
            expiration : datetime,
        };

        offer_create.offers.push(offer_item);
        offer_create.index = index;
        
        let offer_supply_item = OfferSupplyItem{
            offer_id: index,
            nft_id: nft_supply_id,
        };
        offer_supply.offers.push(offer_supply_item);

        let offer_demand_item = OfferDemandItem{
            offer_id: index,
            nft_id: nft_demand_id,
            owner: owner.to_account_info().key(),
        };
        offer_demand.offers.push(offer_demand_item);

        //transfer nft ownership to vault
        let authority_accounts = SetAuthority {
            current_authority: owner.to_account_info(),
            account_or_mint: nft_token_account.to_account_info(),
        };

        let authority_ctx = CpiContext::new(token_program.to_account_info(), authority_accounts);
        token::set_authority(
            authority_ctx,
            AuthorityType::AccountOwner,
            Some(offer_create.key()),
        )?;

        Ok(())

    }

    pub fn offer_delete(ctx:Context<OfferCreate>,offer_id:u32) -> Result<()> {
        let offer_create = &mut ctx.accounts.offer_create;
        let offer_supply = &mut ctx.accounts.offer_supply;
        let offer_demand = &mut ctx.accounts.offer_demand;
        let signer = &mut ctx.accounts.owner;
        let mut flag: bool = false;
        
        for offer_item in offer_create.offers.iter() {
            if offer_item.offer_id == offer_id {
                if offer_item.creator != signer.to_account_info().key() {
                    return Err(NFTDEXError::OfferNotCreator.into());
                } 
                flag = true;
            }
        }
        if flag {
            offer_create.offers.retain(|x| x.offer_id != offer_id);offer_supply.offers.retain(|x| x.offer_id != offer_id);
            offer_demand.offers.retain(|x| x.offer_id != offer_id);
        }
        

        Ok(())
    }

    pub fn offer_delete_exp(ctx:Context<OfferCreate>,expiration: i64) -> Result<()> {
        let offer_create = &mut ctx.accounts.offer_create;
        let offer_supply = &mut ctx.accounts.offer_supply;
        let offer_demand = &mut ctx.accounts.offer_demand;
        let signer = &mut ctx.accounts.owner;
        let clock = &ctx.accounts.clock;

        if signer.to_account_info().key() != offer_create.owner {
            return Err(NFTDEXError::OfferNotOwner.into());
        }

        let mut keys = Vec::new();
        
        for offer_item in offer_create.offers.iter() {
            if offer_item.created + offer_item.expiration + expiration <  clock.unix_timestamp {
                keys.push(offer_item.offer_id)
                
            }
        }
        if keys.len() > 0 {
            for key in keys.iter(){
                offer_create.offers.retain(|x| x.offer_id != *key);
                offer_supply.offers.retain(|x| x.offer_id != *key);
                offer_demand.offers.retain(|x| x.offer_id != *key);
            }
        }

        Ok(())
    }

    pub fn trade_create(ctx:Context<OfferCreate>,offer_id: u32) -> Result<()> {
        let offer_create = &mut ctx.accounts.offer_create;
        let offer_supply = &mut ctx.accounts.offer_supply;
        let offer_demand = &mut ctx.accounts.offer_demand;
        let nft_token_account = &mut ctx.accounts.nft_token_account;
        let token_program = &ctx.accounts.token_program;
        let signer = &mut ctx.accounts.owner;

        let mut flag: bool = false;

        
        for offer_item in offer_create.offers.iter_mut() {
            if offer_item.offer_id == offer_id {
                flag = true;
            }
        }

        if flag {
            let offer_account_seeds = &[
                &id().to_bytes(),
                OFFER_CREATE_PREFIX,
                &[offer_create.bump],
            ];
    
            let offer_account_signer = &[&offer_account_seeds[..]];
            //transfer nft to user
            let authority_accounts = SetAuthority {
                current_authority: offer_create.to_account_info(),
                account_or_mint: nft_token_account.to_account_info(),
            };
            let authority_ctx = CpiContext::new_with_signer(
                token_program.to_account_info(),
                authority_accounts,
                offer_account_signer,
            );
            token::set_authority(
                authority_ctx,
                AuthorityType::AccountOwner,
                Some(signer.key()),
            )?;

            offer_create.offers.retain(|x| x.offer_id != offer_id);offer_supply.offers.retain(|x| x.offer_id != offer_id);
            offer_demand.offers.retain(|x| x.offer_id != offer_id);
        }

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(bump:u8)]
pub struct  InitializeCreateAccount<'info> {
    #[account(
        init,
        payer = owner,
        seeds = [&id().to_bytes(),OFFER_CREATE_PREFIX],
        bump,
        space = 9000,
    )]

    pub offer_create: Account<'info,OfferCreateAccount>,
    
    /// CHECK:` doc comment explaining why no checks through types are necessary.
    #[account(mut, signer)]
    pub owner: AccountInfo<'info>,
    
    pub system_program: Program<'info, System>,
}



#[derive(Accounts)]
#[instruction(bump:u8)]
pub struct  InitializeSupplyAccount<'info> {
    #[account(
        init,
        payer = owner,
        seeds = [&id().to_bytes(),OFFER_SUPPLY_PREFIX],
        bump,
        space = 9000,
    )]

    pub offer_supply: Account<'info,OfferSupplyAccount>,
    
    /// CHECK:` doc comment explaining why no checks through types are necessary.
    #[account(mut, signer)]
    pub owner: AccountInfo<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(bump:u8)]
pub struct  InitializeDemandAccount<'info> {
    #[account(
        init,
        payer = owner,
        seeds = [&id().to_bytes(),OFFER_DEMAND_PREFIX],
        bump,
        space = 9000,
    )]

    pub offer_demand: Account<'info,OfferDemandAccount>,
    
    /// CHECK:` doc comment explaining why no checks through types are necessary.
    #[account(mut, signer)]
    pub owner: AccountInfo<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct OfferCreate<'info> {
    /// The offer account
    #[account(
        mut,
        seeds = [&id().to_bytes(),OFFER_CREATE_PREFIX],
        bump = offer_create.bump,
    )]
    pub offer_create: Account<'info,OfferCreateAccount>,

    /// The offer supply account
    #[account(
        mut,
        seeds = [&id().to_bytes(),OFFER_SUPPLY_PREFIX],
        bump = offer_supply.bump,
    )]
    pub offer_supply: Account<'info,OfferSupplyAccount>,

    /// The offer demand account
    #[account(
        mut,
        seeds = [&id().to_bytes(),OFFER_DEMAND_PREFIX],
        bump = offer_demand.bump,
    )]
    pub offer_demand: Account<'info,OfferDemandAccount>,

    /// CHECK:` doc comment explaining why no checks through types are necessary.
    #[account(mut, signer)]
    pub owner: AccountInfo<'info>,

    pub nft_mint: Box<Account<'info, Mint>>,

    /// The token account from the owner
    #[account(
        mut,
        has_one = owner @ NFTDEXError::InvalidNFTOwner,
        constraint = nft_token_account.mint == nft_mint.key() @ NFTDEXError::InvalidNFTAccountMint,
        constraint = nft_token_account.amount == 1 @ NFTDEXError::NFTAccountEmpty,
    )]
    pub nft_token_account: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
    pub clock: Sysvar<'info, Clock>,
}