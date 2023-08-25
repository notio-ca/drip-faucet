var $USER = [
    {
      name: "StableFund",
      address: "0xcaeaf40058d0f8b76d31de48a7cfc881de408f7f",
      chains: [
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"", symbol:"BUSD", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2
            },
            { 
              address: "0xfbbc24ca5518898fae0d8455cb265faaa66157c9", label:"Rewards", symbol:"BUSD", 
              func: "getAllClaimableReward", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2 
            },
            { 
              address: "0xfbbc24ca5518898fae0d8455cb265faaa66157c9", label:"Claimable", symbol:"BUSD", output:4, 
              func: "investors", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2 
            },
            { 
              address: "0xfbbc24ca5518898fae0d8455cb265faaa66157c9", label:"Locked", symbol:"BUSD", output:1, 
              func: "investors", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2 
            },
            { 
              address: "0xfbbc24ca5518898fae0d8455cb265faaa66157c9", label:"Per Day", symbol:"BUSD", output:1, calc:"* 0.015", 
              func: "investors", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2 
            },
          ]
        },
      ]
    },

    
  ];