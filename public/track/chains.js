// https://chainid.network/chains.json
// logo added
$CHAINS = {
    data: [
        {"name":"Binance Smart Chain","chain":"BSC","rpc":["https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","wss://bsc-ws-node.nariox.org"],"faucets":["https://free-online-app.com/faucet-for-eth-evm-chains/"],"nativeCurrency":{"name":"Binance Chain Native Token","symbol":"BNB","decimals":18},"infoURL":"https://www.binance.org","shortName":"bnb","chainId":56,"networkId":56,"slip44":714,"explorers":[{"name":"bscscan","url":"https://bscscan.com","standard":"EIP3091"}]},
        {"name":"Fantom Opera","chain":"FTM","rpc":["https://rpc.ftm.tools"],"faucets":["https://free-online-app.com/faucet-for-eth-evm-chains/"],"nativeCurrency":{"name":"Fantom","symbol":"FTM","decimals":18},"infoURL":"https://fantom.foundation","shortName":"ftm","chainId":250,"networkId":250,"icon":"fantom","explorers":[{"name":"ftmscan","url":"https://ftmscan.com","icon":"ftmscan","standard":"EIP3091"}]},
        {"name":"Polygon","chain":"Polygon","rpc":["https://polygon-rpc.com/","https://rpc-mainnet.matic.network","https://matic-mainnet.chainstacklabs.com","https://rpc-mainnet.maticvigil.com","https://rpc-mainnet.matic.quiknode.pro","https://matic-mainnet-full-rpc.bwarelabs.com"],"faucets":[],"nativeCurrency":{"name":"MATIC","symbol":"MATIC","decimals":18},"infoURL":"https://polygon.technology/","shortName":"MATIC","chainId":137,"networkId":137,"slip44":966,"explorers":[{"name":"polygonscan","url":"https://polygonscan.com","standard":"EIP3091"}]},
        {"name":"Avalanche","chain":"AVAX","rpc":["https://api.avax.network/ext/bc/C/rpc"],"faucets":["https://free-online-app.com/faucet-for-eth-evm-chains/"],"nativeCurrency":{"name":"Avalanche","symbol":"AVAX","decimals":18},"infoURL":"https://www.avax.network/","shortName":"Avalanche","chainId":43114,"networkId":43114,"slip44":9005,"explorers":[{"name":"snowtrace","url":"https://snowtrace.io","standard":"EIP3091"}]},
        {"name":"Cronos","chain":"CRO","rpc":["https://evm.cronos.org"],"faucets":[],"nativeCurrency":{"name":"Cronos","symbol":"CRO","decimals":18},"infoURL":"https://cronos.org/","shortName":"cro","chainId":25,"networkId":25,"explorers":[{"name":"Cronos Explorer","url":"https://cronos.org/explorer","standard":"none"}]},
    ],
    data_extra: {
        "ETH": { "logo":"https://assets.debank.com/static/media/eth.8ab4ac7c.svg", "decimals_price":"2" },
        "BSC": { "logo":"https://assets.debank.com/static/media/bsc.3d1e2f26.svg", "decimals_price":"2" },
        "FTM": { "logo":"https://assets.debank.com/static/media/fantom.d3c4549f.svg", "decimals_price":"3" },
        "Polygon": { "logo":"https://assets.debank.com/static/media/polygon.23445189.svg", "decimals_price":"3" },
        "AVAX": { "logo":"https://assets.debank.com/static/media/avalanche.850d5617.svg", "decimals_price":"2" },
        "CRO": { "logo":"https://assets.debank.com/static/media/cronos.5434f94f.svg", "decimals_price":"3" },
    },
    getChain: (chainId) => {
        for (var chain of $CHAINS.data) {
            if (chain.chainId == chainId) {
                chain.logo = $CHAINS.data_extra[chain.chain]["logo"];
                chain["decimals_price"] = parseInt($CHAINS.data_extra[chain.chain]["decimals_price"]);
                return chain;
            }
        }
        return null;
    },
    getSymbol: (chainId) => {
        return $CHAINS.getByChainId(chainId).nativeCurrency.symbol;
    }



}