use anchor_lang::prelude::*;

#[error_code]
pub enum NFTDEXError {
    #[msg("Account must be creator of offers to delete")]
    OfferNotCreator,
    #[msg("Account must be owner of offer table to delete")]
    OfferNotOwner,
    #[msg("The provided NFT token account is not owned by the provided owner")]
    InvalidNFTOwner,
    #[msg("The provided NFT token account is not for the NFT mint")]
    InvalidNFTAccountMint,
    #[msg("The provided NFT token account does not have the token")]
    NFTAccountEmpty,
}