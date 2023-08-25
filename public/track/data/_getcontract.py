import requests, json

CHAINS = {
    "56": { "getabi": "https://api.bscscan.com/api?module=contract&action=getabi&apikey=F74YV9X8JPVABAVX8YX6SJD4MCZ2BAR2CD&address="}
}

name = input("Name: ")
contract_address = input("Contract Address: ")
chain_id = 56 #input("Chain ID: ")

logo = "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/_CONTRACT_ADDRESS_/logo.png"
#logo = "https://pancakeswap.finance/images/tokens/_CONTRACT_ADDRESS_.png"

url_get_abi = CHAINS[str(chain_id)]["getabi"]

C = {
    "name": name,
    "symbol": "SYM",
    "address": contract_address,
    "decimals": 18,
    "decimals_qty": 2,
    "decimals_price": 2,
    "logo": logo.replace("_CONTRACT_ADDRESS_", contract_address),
    "chainId": int(chain_id),
    "abi": []
}

r = requests.get(url_get_abi + contract_address).json()
if r["status"] == "1":
    C["abi"] = json.loads(r["result"])

else:
    print("NOT FOUND")

f = open("contract/" + contract_address.lower() + ".json", "w")
f.write(json.dumps(C))
f.close()

