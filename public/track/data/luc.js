var $USER = [
    {
      name: "W.1",
      address: "0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08",
      chains: [
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"", symbol:"",
              func: "balanceOf", params: ["_WALLET_ADDRESS_"]
            },
            // { 
            //   address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", label:"", 
            //   func: "balanceOf", params: ["_WALLET_ADDRESS_"]
            // },
            { 
              address: "0x20f663CEa80FaCE82ACDFA3aAE6862d246cE0333", label:"", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"]
            },
            { 
              address: "0xa0feB3c81A36E885B6608DF7f0ff69dB97491b58", label:"", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"]
            },
            // { 
            //   address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", label:"", 
            //   func: "balanceOf", params: ["_WALLET_ADDRESS_"]
            // },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Available", 
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Deposits", output:"deposits",
              func: "userInfo", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0xe2d26507981a4daaaa8040bae1846c14e0fb56bf", label:"Rewards", 
              func: "beanRewards", params: ["_WALLET_ADDRESS_"] 
            },
            // { 
            //   address: "0xa5f8c5dbd5f286960b9d90548680ae5ebff07652", label:"Available",
            //   func: "pendingCake", params: [3, "_WALLET_ADDRESS_"] 
            // },
            // { 
            //   address: "0xa5f8c5dbd5f286960b9d90548680ae5ebff07652", label:"Deposits", symbol:"BUSD/BNB", output:"amount",
            //   func: "userInfo", params: [3, "_WALLET_ADDRESS_"] 
            // }
          ]
        },//
        {
          chainId: 137,
          assets: [
            { 
              address: "0x5AB47Dd39264a5D076566FC01A1612a1a982654e", label:"Rewards",
              func: "seedRewards", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0x9e25126ebcd57c8eb6eb6c2ffc67810d365cfc3e", label:"", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"]
            },
          ]
        },
        {
          chainId: 250,
          assets: [
            { 
              address: "0x63690090b52b1e6e685b88ca365596b8edb0f379", label:"Rewards",
              func: "beanRewards", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0x99f07e573A962E489bA0EB9042bDa9f0B4be91cF", label:"Rewards",
              func: "boneRewards", params: ["_WALLET_ADDRESS_"] 
            },
          ]
        },
        {
          chainId: 43114,
          assets: [
            { 
              address: "0xEa8129f602E0CFDD9FBa116e07fb04A13AFdc48a", label:"Rewards", output:0,
              func: "getClaimableRewardsOf", params: ["_WALLET_ADDRESS_"] 
            },
          ]
        },
      ]
    },

    {
      name: "StableFund",
      address: "0x1c25ea7b5216e9eb9a58e0adc3eef4a4ebf4baaa",
      chains: [
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"",
              func: "balanceOf", params: ["_WALLET_ADDRESS_"]
            },
            { 
              address: "0xfbbc24ca5518898fae0d8455cb265faaa66157c9", label:"Rewards",
              func: "getAllClaimableReward", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0xfbbc24ca5518898fae0d8455cb265faaa66157c9", label:"Claimable", output:4, 
              func: "investors", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0xfbbc24ca5518898fae0d8455cb265faaa66157c9", label:"Locked", output:1, 
              func: "investors", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0xfbbc24ca5518898fae0d8455cb265faaa66157c9", label:"Per Day", output:1, calc:"* 0.015", 
              func: "investors", params: ["_WALLET_ADDRESS_"] 
            },
          ]
        },
        {
          chainId: 137,
          assets: [
            { 
              address: "0x0dc733a0c086a113a88ddab7c4160dc097b6f89a", label:"Rewards",
              func: "getAllClaimableReward", params: ["_WALLET_ADDRESS_"] 
            },
            // { 
            //   address: "0x0dc733a0c086a113a88ddab7c4160dc097b6f89a", label:"Locked",
            //   func: "getOwnedDeposits", params: ["_WALLET_ADDRESS_"] 
            // },          
          ]
        },
      ]
    }, 

    {
      name: "W.2",
      address: "0xe9CE533EeC1c26de3bBAFB63d116B670A7ee07ee",
      chains: [
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"",
              func: "balanceOf", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0xBfACD29427fF376FF3BC22dfFB29866277cA5Fb4", label:"",
              func: "balanceOf", params: ["_WALLET_ADDRESS_"]
            },
            { 
              address: "0xbd6e5D331A09fb39D28CB76510ae9b7d7781aE68", label:"Available",
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0xbd6e5D331A09fb39D28CB76510ae9b7d7781aE68", label:"Deposits", output:"deposits",
              func: "userInfo", params: ["_WALLET_ADDRESS_"] 
            },
            // { 
            //   address: "0xec10059BA900883ed6154883E9f3A1C24fcE1eb7", label:"Rewards", 
            //   func: "dividendsOf", params: ["_WALLET_ADDRESS_"] 
            // },
            // { 
            //   address: "0xec10059BA900883ed6154883E9f3A1C24fcE1eb7", label:"Deposits", 
            //   func: "balanceOf", params: ["_WALLET_ADDRESS_"] 
            // },
            { 
              address: "0x3685407aabf9a0ab54ed39168733b1e2d2a80e5e", label:"Available", 
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"] 
            },
            // { 
            //   address: "0x6839e295a8f13864A2830fA0dCC0F52e71a82DbF", label:"Deposits", output:1, calc:"/ 0.75",
            //   func: "userInfo", params: ["_WALLET_ADDRESS_"] 
            // },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Available", 
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0xdd325c38b12903b727d16961e61333f4871a70e0", label:"", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"] 
            },
            // { 
            //   address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Deposits", output:"deposits",
            //   func: "userInfo", params: ["_WALLET_ADDRESS_"] 
            // },
          ] 
        },
      ]
    },
  
    {
      name: "BANK",
      address: "0x5954285f381ef959C0098a0debbD6c2e4d6bA683",
      chains: [
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"] 
            },
            { 
              address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", label:"", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"] 
            },
          ]
        },
      ]
    },
  
  
    // {
    //   name: "Miner",
    //   address: "0xa3320b6774104Cf9c3155Be573550976d7Bf7ee5",
    //   chains: [
    //     {
    //       chainId: 56,
    //       assets: [
    //         { 
    //           address: "0x9314E8328c221C17fF045256a351639EA89c9E3F", label:"Rewards", symbol:"BNB", 
    //           func: "beanRewards", params: ["_WALLET_ADDRESS_"]
    //         },
    //       ]
    //     },
    //   ]
    // },
    
  ];