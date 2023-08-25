
$RPC = {
    init: async () => {
        
    },
    web3_cache: {},
    getWeb3: (chainId) => {
        if ($RPC.web3_cache[chainId] == undefined) {
            chain = $CHAINS.getChain(chainId);
            rpc_url = chain.rpc[0];
            $RPC.web3_cache[chainId] = new Web3(new Web3.providers.HttpProvider(rpc_url));
        }
        return $RPC.web3_cache[chainId];
    },
    contract_cache: {},
    getContract: (contract_info) => {
        contract_id = contract_info.address + "-" + contract_info.chainId;
        if ($RPC.contract_cache[contract_id] == undefined) {
            web3 = $RPC.getWeb3(contract_info.chainId);
            $RPC.contract_cache[contract_id] = new web3.eth.Contract(contract_info.abi, contract_info.address);
        }
        return $RPC.contract_cache[contract_id];
    },
    contract_info_cache: {},
    getContractInfo: async (contract_address) => {
        contract_address = contract_address.toLowerCase();
        if ($RPC.contract_info_cache[contract_address] == undefined) {
            $RPC.contract_info_cache[contract_address] = await jsondb.load("contract/" + contract_address);
        }
        return $RPC.contract_info_cache[contract_address];
    },
    call: async (contract_info, method, args) => {
        params = "";
        for (arg of args) {
            if (params != "") { params += ", "; }
            if (typeof arg == "string") {
                params += "\"" + arg + "\"";
            } else if (typeof arg == "object") {
                params += "[\"" + arg.toString().replaceAll(",", "\",\"") + "\"]";
            } else {
                params += arg;
            }
        }
        contract = $RPC.getContract(contract_info);
        try {
            call = "contract.methods." + method + "(" + params + ")" + ".call()";
            data = await eval( call );
        } catch (error) {
            if (0 == 1) {
                console.log(error);
                console.log(contract_info.name, call);
                console.log(data);
            }
            data = 0;
        }
        
        if (0 == 1) {
            console.log(contract_info.name, contract_info.address, method);
            console.log(data);
        }
        return data;
    },
    custom_func: async (contract_info, asset) => {
        switch (asset.func) {
            case "_SF_Withdrawable":
                total = 0;
                try {
                    deposit_list = await $RPC.call(contract_info, "getOwnedDeposits", asset.params);
                    for (deposit of deposit_list) {
                        deposit_state = await $RPC.call(contract_info, "depositState", [deposit]);
                        if ($RPC.daysSince(deposit_state.depositAt) >= 28) {
                            total += parseInt(deposit_state.depositAmount);
                        }
                    }              
                } catch (error) {
                    return 0;
                }
                return total;
                break;
            default:
                return 0;
        }
    },
    getBalance: async (wallet_address, chainId) => {
        return await $RPC.getWeb3(chainId).eth.getBalance(wallet_address);
        // if (token_address == "") {
            
        // } else {
        //     contract_info = {
        //         "chainId": chainId,
        //         "address": token_address,
        //         "abi": [{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
        //     };
        //     data = await $RPC.call(contract_info, "balanceOf", [wallet_address]);
        // }
        // return data;
    },
    listFunctions: async (contract_info) => {
        for (func of contract_info.abi) {
            switch (func.type) {
                case "event": break;
                case "function":
                    //if (func.outputs.length == 0) { break; }
                    if (func.stateMutability != "view") { break; }
                    
                    //console.log(func.stateMutability);
                    call = true;
                    params = [];
                    params_info = [];
                    if (func.inputs.length > 0) {
                        for (param_in of func.inputs) {
                            params_info.push(param_in.name + " (" + param_in.type + ")");
                            if (param_in.type == "address") {
                                params.push("0xe9CE533EeC1c26de3bBAFB63d116B670A7ee07ee");
                            }
                            // if (param_in.type == "uint256") {
                            //     params.push(1000000000000000000); //Web3.utils.toBN(1e18)
                            // }
                        }
                        if (params.length != func.inputs.length) { call = false; }

                    }
                    if (call) {
                        console.log(func.name, params_info);
                        data = await $RPC.call(contract_info, func.name, params);
                        //if (func.outputs.length == 1) {
                            
                            console.log(data);
                        //}
                    }
                    // console.log(inputs);
                    // outputs = func.outputs;
                    // console.log(outputs);
                    break;
            }
        }
    },
    daysSince: (epoch) => {
        epoch = parseInt(epoch);
        return Math.floor((Date.now() - (epoch * 1000)) / (1000 * 3600 * 24));
    }
};

window.addEventListener('load', async () => {
    await $RPC.init();
});

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}