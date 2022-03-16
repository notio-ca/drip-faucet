"use strict";

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

 // Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;

let web3;

/**
 * Setup the orchestra
 */
function init() {
  var rpc_list = {};
  for (const item of evmChains.chains) {
    if (item.rpc[0] != undefined) { 
      if (item.chainId == 1) { continue; }
      rpc_list[item.chainId] = item.rpc[0];
    }
  }
  //console.log("WalletConnectProvider is", WalletConnectProvider);
  //console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal


  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "ae4d51bb067740c09a7ab0e021ea446d",
        rpc: rpc_list,
      }
    }

  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    updateTheme:"black",
  });


  if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER") != null) {
    onConnect();
  }
  //console.log("Web3Modal instance is", web3Modal);
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  web3 = new Web3(provider);

  //console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);
  document.querySelector("#network-name").textContent = chainData.name;
  document.querySelector("#network-currency").textContent = chainData.nativeCurrency.symbol;

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  //console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  document.querySelector("#selected-account").textContent = selectedAccount;

  // Get a handl
  const template = document.querySelector("#template-balance");
  const accountContainer = document.querySelector("#accounts");

  // Purge UI elements any previously loaded accounts
  accountContainer.innerHTML = "";

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    // Fill in the templated row and put in the document
    const clone = template.content.cloneNode(true);
    clone.querySelector(".address").textContent = address;
    clone.querySelector(".balance").textContent = humanFriendlyBalance;
    accountContainer.appendChild(clone);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);

  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";
}



/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}

async function butSendToken() {
  await sendToken("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08");
}

async function sendToken(token_address, send_to_address) {
  //var $WEB3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org:443"));
  var ERC20_ABI = [
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },

  ];
  var contract = new web3.eth.Contract(ERC20_ABI, token_address);
  contract.methods.balanceOf(selectedAccount).call(function(error, result) {
    if (error) { console.log(error); return false; };
    console.log(result / 1000000000000000000);
  });
  contract.methods.transfer(send_to_address, web3.utils.toBN(250000000000000000)).send({from: selectedAccount, gas: web3.utils.numberToHex(50000)})
          .on('transactionHash', function(hash){
            console.log(hash);
  });
  var tx = {
    to: web3.utils.toChecksumAddress(send_to_address.toLowerCase()),
    value: web3.utils.numberToHex(0.015 * 1000000000000000000),
    gas: web3.utils.numberToHex(50000),


    /*gasPrice: Web3.utils.numberToHex(10000000000000),
    gasLimit: Web3.utils.numberToHex(10000000000000),
    gas: Web3.utils.numberToHex(50000),*/
  };

  // if (provider.isWalletConnect) { 
  //   tx["from"] = provider.accounts[0];
  //   await provider.wc.sendTransaction(tx)
  //   .then((txHash) => {
  //     console.log(txHash);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // } else {
  //   tx["from"] = provider.selectedAddress;
  //   await provider.request({
  //     method: 'eth_sendTransaction',
  //     params: [tx],
  //   })
  //   .then((txHash) => {
  //     console.log(txHash);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {

  //console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

  //console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if (provider.close) {
    await provider.close();
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
}


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});
