use anchor_lang::prelude::*;

#[account]
pub struct OfferCreateAccount {
    pub offers: Vec<OfferItem>,
    pub owner: Pubkey,
    pub index: u32,
    pub bump: u8,
}

impl OfferCreateAccount {
    
}

impl OfferCreateAccount {
    
}

#[account]
pub struct OfferSupplyAccount {
    pub offers: Vec<OfferSupplyItem>,
    pub owner: Pubkey,
    pub bump: u8,
}

#[account]
pub struct OfferDemandAccount {
    pub offers: Vec<OfferDemandItem>,
    pub owner: Pubkey,
    pub bump: u8,
}

#[derive(Debug, AnchorDeserialize, AnchorSerialize, Default, Clone)]
pub struct OfferItem {
    pub offer_id: u32,
    pub creator: Pubkey,
    pub created: i64,
    pub expiration: i64,
}

#[derive(Debug, AnchorDeserialize, AnchorSerialize, Default, Clone)]
pub struct OfferSupplyItem {
    pub offer_id: u32,
    pub nft_id: Pubkey,
}

#[derive(Debug, AnchorDeserialize, AnchorSerialize, Default, Clone)]
pub struct OfferDemandItem {
    pub offer_id: u32,
    pub nft_id: Pubkey,
    pub owner: Pubkey,
}