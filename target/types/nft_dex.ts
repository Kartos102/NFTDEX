export type NftDex = {
  "version": "0.1.0",
  "name": "nft_dex",
  "instructions": [
    {
      "name": "initializeCreateAccount",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializeSupplyAccount",
      "accounts": [
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializeDemandAccount",
      "accounts": [
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "offerCreate",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "datetime",
          "type": "i64"
        },
        {
          "name": "nftSupplyId",
          "type": "publicKey"
        },
        {
          "name": "nftDemandId",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "offerDelete",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "offerDeleteExp",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "expiration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "tradeCreate",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerId",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "offerCreateAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offers",
            "type": {
              "vec": {
                "defined": "OfferItem"
              }
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "offerSupplyAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offers",
            "type": {
              "vec": {
                "defined": "OfferSupplyItem"
              }
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "offerDemandAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offers",
            "type": {
              "vec": {
                "defined": "OfferDemandItem"
              }
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "OfferItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offerId",
            "type": "u32"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "created",
            "type": "i64"
          },
          {
            "name": "expiration",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "OfferSupplyItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offerId",
            "type": "u32"
          },
          {
            "name": "nftId",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "OfferDemandItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offerId",
            "type": "u32"
          },
          {
            "name": "nftId",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "OfferNotCreator",
      "msg": "Account must be creator of offers to delete"
    },
    {
      "code": 6001,
      "name": "OfferNotOwner",
      "msg": "Account must be owner of offer table to delete"
    },
    {
      "code": 6002,
      "name": "InvalidNFTOwner",
      "msg": "The provided NFT token account is not owned by the provided owner"
    },
    {
      "code": 6003,
      "name": "InvalidNFTAccountMint",
      "msg": "The provided NFT token account is not for the NFT mint"
    },
    {
      "code": 6004,
      "name": "NFTAccountEmpty",
      "msg": "The provided NFT token account does not have the token"
    }
  ]
};

export const IDL: NftDex = {
  "version": "0.1.0",
  "name": "nft_dex",
  "instructions": [
    {
      "name": "initializeCreateAccount",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializeSupplyAccount",
      "accounts": [
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initializeDemandAccount",
      "accounts": [
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "offerCreate",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "datetime",
          "type": "i64"
        },
        {
          "name": "nftSupplyId",
          "type": "publicKey"
        },
        {
          "name": "nftDemandId",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "offerDelete",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerId",
          "type": "u32"
        }
      ]
    },
    {
      "name": "offerDeleteExp",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "expiration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "tradeCreate",
      "accounts": [
        {
          "name": "offerCreate",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerSupply",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offerDemand",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "offerId",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "offerCreateAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offers",
            "type": {
              "vec": {
                "defined": "OfferItem"
              }
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "offerSupplyAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offers",
            "type": {
              "vec": {
                "defined": "OfferSupplyItem"
              }
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "offerDemandAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offers",
            "type": {
              "vec": {
                "defined": "OfferDemandItem"
              }
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "OfferItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offerId",
            "type": "u32"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "created",
            "type": "i64"
          },
          {
            "name": "expiration",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "OfferSupplyItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offerId",
            "type": "u32"
          },
          {
            "name": "nftId",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "OfferDemandItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offerId",
            "type": "u32"
          },
          {
            "name": "nftId",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "OfferNotCreator",
      "msg": "Account must be creator of offers to delete"
    },
    {
      "code": 6001,
      "name": "OfferNotOwner",
      "msg": "Account must be owner of offer table to delete"
    },
    {
      "code": 6002,
      "name": "InvalidNFTOwner",
      "msg": "The provided NFT token account is not owned by the provided owner"
    },
    {
      "code": 6003,
      "name": "InvalidNFTAccountMint",
      "msg": "The provided NFT token account is not for the NFT mint"
    },
    {
      "code": 6004,
      "name": "NFTAccountEmpty",
      "msg": "The provided NFT token account does not have the token"
    }
  ]
};
