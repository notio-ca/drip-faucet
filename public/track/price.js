$PRICE = {
    data: { 
        "BUSD": async () => { return 1; },
        "USDC": async () => { return 1; },
        "USDT": async () => { return 1; }, //0xc2132D05D31c914a87C6611C10748AEb04B58e8F
        "BNB": async () => { return await $PRICE.api.binance("BNB"); },
        "AVAX": async () => { return await $PRICE.api.binance("AVAX"); },
        "FTM": async () => { return await $PRICE.api.binance("FTM"); },
        "MATIC": async () => { return await $PRICE.api.binance("MATIC"); },
        "CRO": async () => { return await $PRICE.api.coingenko("crypto-com-chain"); },
        "DRIP": async () => { return await $PRICE.api.coingenko("drip-network"); },
        /* "DRIP": async () => { return await $PRICE.api.drip(); }, */
        "BUSD/BNB": async () => { return await $PRICE.api.LP("0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16"); },
        "DRIP/BUSD": async () => { return await $PRICE.api.LP("0xa0feB3c81A36E885B6608DF7f0ff69dB97491b58"); },
        "CAKE": async () => { return await $PRICE.api.pcs("0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"); },
        "PSTN": async () => { return await $PRICE.api.dexscreener("0xBfACD29427fF376FF3BC22dfFB29866277cA5Fb4"); },
        "TRUNK": async () => { return await $PRICE.api.dexscreener("0xdd325C38b12903B727D16961e61333f4871A70E0"); },
        "POLAR": async () => { return await $PRICE.api.coingenko("polar"); },
        "OPTX": async () => { return await $PRICE.api.dexscreener("0x4Ef0F0f98326830d823F28174579C39592cDB367"); },
        "OPT3": async () => { return await $PRICE.api.dexscreener("0xCf630283E8Ff2e30C29093bC8aa58CADD8613039"); },
    },
    get: async (asset) => {
        try {
            asset.price = await $PRICE.data[asset.symbol]();
        } catch (error) {
            asset.price = 0;
        }
        
    },
    api: {
        binance: async (symbol) => {
            url = "https://api.binance.com/api/v3/ticker/price?symbol="+symbol.toUpperCase()+"BUSD";
            try {
                r = await $PRICE.api_get(url);
                return parseFloat(r.price);
            } catch {
                return 0;
            }
        },
        debank: async (chain, tokenAddess) => {
            return 0;
            url = "https://openapi.debank.com/v1/token?chain_id="+chain+"&id="+tokenAddess;
            try {
                r = await $PRICE.api_get(url);
                return parseFloat(r.price);
            } catch {
                return 0;
            }
        },
        pcs: async (tokenAddess) => {
            url = "https://api.pancakeswap.info/api/v2/tokens/"+tokenAddess;
            try {
                r = await $PRICE.api_get(url);
                return parseFloat(r.data.price);
            } catch {
                return 0;
            }
        },
        coingenko: async (api_id) => {
            url = "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids="+api_id;
            try {
                r = await $PRICE.api_get(url);
                return parseFloat(r[api_id]["usd"]);
            } catch {
                return 0;
            }
        },
        dexscreener: async (tokenAddess) => {
            url = "https://api.dexscreener.com/latest/dex/tokens/"+tokenAddess;
            try {
                r = await $PRICE.api_get(url);
                return parseFloat(r["pairs"][0]["priceUsd"]);
            } catch {
                return 0;
            }
        },
        LP: async (tokenAddess) => {
            url = "https://charters.herokuapp.com/lp/"+tokenAddess;
            try {
                r = await $PRICE.api_get(url);
                return parseFloat(r.price);
            } catch {
                return 0;
            }
        },
        drip: async () => {
            url = "https://api.drip.community/prices/";
            try {
                r = await $PRICE.api_get(url);
                return parseFloat(r[r.length-1][1]);
            } catch {
                return 0;
            }
        },
    },
    api_get: async (url) => {
        req = await fetch(url);
        res = await req.json();
        return res;
    }
}
//https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=osmosis   data["osmosis"]["usd"];
//https://openapi.debank.com/v1/token?chain_id=bsc&id=0x3a4c15f96b3b058ab3fb5faf1440cc19e7ae07ce   data.price