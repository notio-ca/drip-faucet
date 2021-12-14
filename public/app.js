
// ----------------------------------------------------------------------------------------
// -- CONFIG & INIT -----------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
var $WEB3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org:443"));

var $ADR_DripToken = "0x20f663cea80face82acdfa3aae6862d246ce0333";
var $ABI_DripToken = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_INT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"statsOf","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addrs","type":"address[]"}],"name":"removeAddressesFromWhitelist","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"removeAddressFromWhitelist","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"targetSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"remainingMintableSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"player","type":"address"}],"name":"mintedBy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"taxRate","type":"uint8"}],"name":"setAccountCustomTax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"vaultAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalTxs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"removeAccountCustomTax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"calculateTransferTaxes","outputs":[{"name":"adjustedValue","type":"uint256"},{"name":"taxAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"addAddressToWhitelist","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newVaultAddress","type":"address"}],"name":"setVaultAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintedSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isExcluded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"players","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addrs","type":"address[]"}],"name":"addAddressesToWhitelist","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"excludeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"includeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialMint","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"vault","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TaxPayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"WhitelistedAddressAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"WhitelistedAddressRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
var $Contract_DripToken = new $WEB3.eth.Contract($ABI_DripToken, $ADR_DripToken);

var $ADR_DripFaucet = "0xFFE811714ab35360b67eE195acE7C10D93f89D8C";
var $ABI_DripFaucet = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_src","type":"address"},{"indexed":true,"internalType":"address","name":"_dest","type":"address"},{"indexed":false,"internalType":"uint256","name":"_deposits","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_payouts","type":"uint256"}],"name":"BalanceTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"}],"name":"BeneficiaryUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Checkin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DirectPayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"HeartBeat","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"interval","type":"uint256"}],"name":"HeartBeatIntervalUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"referrals","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total_deposits","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total_payouts","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"total_structure","type":"uint256"}],"name":"Leaderboard","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LimitReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ManagerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MatchPayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NewAirdrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"upline","type":"address"}],"name":"Upline","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"CompoundTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ExitTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_UINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"airdrops","outputs":[{"internalType":"uint256","name":"airdrops","type":"uint256"},{"internalType":"uint256","name":"airdrops_received","type":"uint256"},{"internalType":"uint256","name":"last_airdrop","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"balanceLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"claimsAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractInfo","outputs":[{"internalType":"uint256","name":"_total_users","type":"uint256"},{"internalType":"uint256","name":"_total_deposited","type":"uint256"},{"internalType":"uint256","name":"_total_withdraw","type":"uint256"},{"internalType":"uint256","name":"_total_bnb","type":"uint256"},{"internalType":"uint256","name":"_total_txs","type":"uint256"},{"internalType":"uint256","name":"_total_airdrops","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"creditsAndDebits","outputs":[{"internalType":"uint256","name":"_credits","type":"uint256"},{"internalType":"uint256","name":"_debits","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"custody","outputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"last_heartbeat","type":"uint256"},{"internalType":"uint256","name":"last_checkin","type":"uint256"},{"internalType":"uint256","name":"heartbeat_interval","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_upline","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit_bracket_size","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dripVaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getCustody","outputs":[{"internalType":"address","name":"_beneficiary","type":"address"},{"internalType":"uint256","name":"_heartbeat_interval","type":"uint256"},{"internalType":"address","name":"_manager","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint8","name":"_level","type":"uint8"}],"name":"isBalanceCovered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"isNetPositive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"lastActivity","outputs":[{"internalType":"uint256","name":"_heartbeat","type":"uint256"},{"internalType":"uint256","name":"_lapsed_heartbeat","type":"uint256"},{"internalType":"uint256","name":"_checkin","type":"uint256"},{"internalType":"uint256","name":"_lapsed_checkin","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"maxPayoutOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"max_payout_cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"payoutOf","outputs":[{"internalType":"uint256","name":"payout","type":"uint256"},{"internalType":"uint256","name":"max_payout","type":"uint256"},{"internalType":"uint256","name":"net_payout","type":"uint256"},{"internalType":"uint256","name":"sustainability_fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ref_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"roll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_pendingDiv","type":"uint256"}],"name":"sustainabilityFeeV2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_airdrops","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_bnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_deposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_txs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_users","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCompoundTax","type":"uint256"}],"name":"updateCompoundTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newBracketSize","type":"uint256"}],"name":"updateDepositBracketSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newExitTax","type":"uint256"}],"name":"updateExitTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_newRefBalances","type":"uint256[]"}],"name":"updateHoldRequirements","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newInitialDeposit","type":"uint256"}],"name":"updateInitialDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPayoutCap","type":"uint256"}],"name":"updateMaxPayoutCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPayoutRate","type":"uint256"}],"name":"updatePayoutRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRefBonus","type":"uint256"}],"name":"updateRefBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRefDepth","type":"uint256"}],"name":"updateRefDepth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"userInfo","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"deposit_time","type":"uint256"},{"internalType":"uint256","name":"deposits","type":"uint256"},{"internalType":"uint256","name":"payouts","type":"uint256"},{"internalType":"uint256","name":"direct_bonus","type":"uint256"},{"internalType":"uint256","name":"match_bonus","type":"uint256"},{"internalType":"uint256","name":"last_airdrop","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"userInfoTotals","outputs":[{"internalType":"uint256","name":"referrals","type":"uint256"},{"internalType":"uint256","name":"total_deposits","type":"uint256"},{"internalType":"uint256","name":"total_payouts","type":"uint256"},{"internalType":"uint256","name":"total_structure","type":"uint256"},{"internalType":"uint256","name":"airdrops_total","type":"uint256"},{"internalType":"uint256","name":"airdrops_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"referrals","type":"uint256"},{"internalType":"uint256","name":"total_structure","type":"uint256"},{"internalType":"uint256","name":"direct_bonus","type":"uint256"},{"internalType":"uint256","name":"match_bonus","type":"uint256"},{"internalType":"uint256","name":"deposits","type":"uint256"},{"internalType":"uint256","name":"deposit_time","type":"uint256"},{"internalType":"uint256","name":"payouts","type":"uint256"},{"internalType":"uint256","name":"rolls","type":"uint256"},{"internalType":"uint256","name":"ref_claim_pos","type":"uint256"},{"internalType":"uint256","name":"accumulatedDiv","type":"uint256"}],"stateMutability":"view","type":"function"}];
var $Contract_DripFaucet = new $WEB3.eth.Contract($ABI_DripFaucet, $ADR_DripFaucet);

var $ADR_DripLiquidity = "0x4Fe59AdcF621489cED2D674978132a54d432653A";
var $ABI_DripLiquidity = [{"inputs":[{"internalType":"address","name":"token_addr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"}],"name":"WhitelistedAddressAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"}],"name":"WhitelistedAddressRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"uint256","name":"bnb_amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"token_amount","type":"uint256"}],"name":"onAddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"token_amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"bnb_amount","type":"uint256"}],"name":"onBnbPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"onContractBalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"onLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"onPrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":true,"internalType":"uint256","name":"bnb_amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"token_amount","type":"uint256"}],"name":"onRemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"onSummary","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"bnb_amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"token_amount","type":"uint256"}],"name":"onTokenPurchase","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"addAddressToWhitelist","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addAddressesToWhitelist","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"min_liquidity","type":"uint256"},{"internalType":"uint256","name":"max_tokens","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bnbBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"min_tokens","type":"uint256"}],"name":"bnbToTokenSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"}],"name":"bnbToTokenSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb_sold","type":"uint256"}],"name":"getBnbToLiquidityInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb_sold","type":"uint256"}],"name":"getBnbToTokenInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_bought","type":"uint256"}],"name":"getBnbToTokenOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"input_amount","type":"uint256"},{"internalType":"uint256","name":"input_reserve","type":"uint256"},{"internalType":"uint256","name":"output_reserve","type":"uint256"}],"name":"getInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getLiquidityToReserveInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"output_amount","type":"uint256"},{"internalType":"uint256","name":"input_reserve","type":"uint256"},{"internalType":"uint256","name":"output_reserve","type":"uint256"}],"name":"getOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"}],"name":"getTokenToBnbInputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb_bought","type":"uint256"}],"name":"getTokenToBnbOutputPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"providers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"removeAddressFromWhitelist","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeAddressesFromWhitelist","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"min_bnb","type":"uint256"},{"internalType":"uint256","name":"min_tokens","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"internalType":"uint256","name":"min_bnb","type":"uint256"}],"name":"tokenToBnbSwapInput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb_bought","type":"uint256"},{"internalType":"uint256","name":"max_tokens","type":"uint256"}],"name":"tokenToBnbSwapOutput","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTxs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"txs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
var $Contract_DripLiquidity = new $WEB3.eth.Contract($ABI_DripLiquidity, $ADR_DripLiquidity);

var $ADR_BR34PToken = "0xa86d305A36cDB815af991834B46aD3d7FbB38523";
var $ABI_BR34PToken = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"burnFee","type":"uint256"}],"name":"_setBurnFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxAmount","type":"uint256"}],"name":"_setMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"_setTaxFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var $Contract_BR34PToken = new $WEB3.eth.Contract($ABI_BR34PToken, $ADR_BR34PToken);


// ----------------------------------------------------------------------------------------
// -- TOOLS -------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
async function API_Get(url, callback) {
    //try {
        req = await fetch(url);
        res = await req.json();
    //} catch { callback({}); }

    callback(res);
}

$Cookie = {
    get: function (c_name) {
        var i,x,y,ARRcookies=document.cookie.split(";");
        for (i=0;i<ARRcookies.length;i++) {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==c_name) { return unescape(y); }
        }
    },
    set: function (c_name, value, exdays)  {
        if (!exdays) { exdays = 365; }
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value + "; path=/";
    },
    delete: function (name) {  
        FW.Cookie.Set(name, "");
    }
};

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}

// ----------------------------------------------------------------------------------------
// -- APP ---------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
var app = new Vue({
    el: '#app',
    data: {
        drip_usd: 0,
        drip_players: 0,
        drip_supply: 0,
        drip_contract_balance: 0,
        bnb_usd:0,
        currency_select: false,
        account_list: [],
        account: "",
    },
    watch: {
        account_list: function () { this.userSave(); }
    },
    mounted: function() {
        this.userLoad();
        setInterval(this.appTick, 30 * 1000);
        this.appTick();
        setInterval(this.appLongTick, 5 * 60 * 1000);
        this.appLongTick();
        
        // this.ping();
        if (document.location.hash != "") { this.account = document.location.hash.replace("#", ""); this.addAccount(); }
    },
    methods: {
        appTick() {
            this.getDripPrice();
            this.getBNBPrice();
            for (i=0; i < this.account_list.length; i++) {
                this.getAccountAvailable(i);
            }
        },
        appLongTick() {
            this.dripStats();
            for (i=0; i < this.account_list.length; i++) {
                this.getAccount(i);
                this.br34pBalance(i);
                this.bnbBalance(i);
            }
        },
        userSave() {
            save = [];
            for (i=0; i < this.account_list.length; i++) {
                save.push({
                    name: this.account_list[i].name,
                    wallet: this.account_list[i].wallet,
                });
            }
            $Cookie.set("USER", JSON.stringify(save));
            console.log("User Saved");
        },
        userLoad() {
            saved_data = $Cookie.get("USER");
            if (saved_data == undefined) { saved_data = "[]"; }
            saved_data = JSON.parse(saved_data);
            this.account_list = [];
            for (i=0; i < saved_data.length; i++) {
                this.account_list.push({
                    name: saved_data[i].name,
                    wallet: saved_data[i].wallet,
                    claims_available: 0,
                    payout_per_day:0,
                    deposits: 0,
                    deposit_last: 0,
                    payout_max: 0,
                    claimed: 0,
                    reward_direct: 0,
                    reward_indirect: 0,
                    airdrop_sent: 0,
                    airdrop_sent_last: 0,
                    airdrop_received: 0,
                    team_direct: 0,
                    team_total: 0,
                    buddy_address: "",
                    br43p_balance: 0,
                    bnb_balance: 0
                });
            }
            
            this.appTick();
            this.appLongTick();
        },
        moveUp(index) {
            var copy = this.remove(index);
            this.account_list.unshift(copy[0]);
        },
        remove(index) {
            return this.account_list.splice(index,1);
        },
        toDec18(value) { return value / 1000000000000000000; },
        toNum(value) {
            return parseFloat(value.toFixed(3));
        },
        sinceDays(epoch) {
            if (epoch == 0) { return "Never"; }
            return ((((new Date()).getTime() / 1000) - epoch) / 60 / 60 / 24).toFixed(1) + " days";
        },
        getDripPrice() {
            API_Get("https://api.drip.community/prices/", function (data) {
                app.drip_usd = data[data.length-1].value;
                document.title = app.drip_usd.toFixed(2) + " $ DRIP";
            });
        },
        getBNBPrice() {
            API_Get("https://api.binance.com/api/v3/ticker/price?symbol=BNBBUSD", function (data) {
                app.bnb_usd = data.price;
            });
        },
        ping() {
            API_Get("/.netlify/functions/ping", function (data) {
                console.log(data);
            });
        },
        addAccount(e) {
            this.account = this.account.replaceAll(" ", "");
            if (this.account.length != 42) { console.log("Wrong Wallet Address"); return false; }
            for (i=0; i < this.account_list.length; i++) { if (this.account_list[i].wallet == this.account) { console.log("Duplicate"); return false; } }
            new_wallet = this.account + "";
            this.account = "";
            this.account_list.unshift({
                name: "Wallet " + new_wallet.substring(0, 7),
                wallet: new_wallet
            });
            this.userSave();
            this.userLoad();
        },
        getAccountAvailable(index) {
            var account = this.account_list[index];
            $Contract_DripFaucet.methods.claimsAvailable(account.wallet).call(function(error, result) {
                if (error) { console.log(error); return false; };
                account.claims_available = app.toDec18(result);
            });
        },
        getAccount(index) {
            var account = this.account_list[index];
            $Contract_DripFaucet.methods.userInfo(account.wallet).call(function(error, result) {
                if (error) { console.log(error); return false; };
                account.deposits = app.toDec18(result.deposits);
                account.payout_per_day = account.deposits * 0.01;
                //account.deposit_last = app.sinceDays(result.deposit_time); // UNUSED
                payout_max = app.toDec18(result.deposits) * 3.65;
                if (payout_max > 100000) { payout_max = 100000; }
                account.payout_max = payout_max;
                account.claimed = app.toDec18(result.payouts);
                account.reward_direct = app.toDec18(result.direct_bonus);
                account.reward_indirect = app.toDec18(result.match_bonus);
                account.buddy_address = result.upline;
                //console.log(result);
            });
            $Contract_DripFaucet.methods.airdrops(account.wallet).call(function(error, result) {
                if (error) { console.log(error); return false; };
                account.airdrop_sent = app.toDec18(result.airdrops);
                //account.airdrop_sent_last = app.sinceDays(result.last_airdrop); // UNUSED
                account.airdrop_received = app.toDec18(result.airdrops_received);
                //console.log(result);
            });
            $Contract_DripFaucet.methods.userInfoTotals(account.wallet).call(function(error, result) {
                if (error) { console.log(error); return false; };
                account.team_direct = result.referrals;
                account.team_total = result.total_structure;
                //console.log(result);
            });
            //$Contract_DripFaucet.methods.contractInfo().call(function(error, result) { console.log(result); });
            //$Contract_DripFaucet.methods.balanceLevel(address).call(function(error, result) { console.log(result); });
            //$Contract_DripFaucet.methods.payoutOf(address).call(function(error, result) { console.log(result); });
            //$Contract_DripFaucet.methods.maxPayoutOf(address).call(function(error, result) { console.log(result); });

        },
        bnbBalance(index) {
            var account = this.account_list[index];
            $WEB3.eth.getBalance(account.wallet, function(error, result) {
                account.bnb_balance = app.toDec18(result);
            });
        },
        br34pBalance(index) {
            var account = this.account_list[index];
            $Contract_BR34PToken.methods.balanceOf(account.wallet).call(function(error, result) {
                if (error) { console.log(error); return false; };
                account.br43p_balance = result / 100000000; // 8 decimals
            });
        },
        dripStats() {
            $Contract_DripLiquidity.methods.tokenBalance().call(function(error, result) {
                if (error) { console.log(error); return false; };
                app.drip_supply = app.toDec18(result);
            });
            $Contract_DripLiquidity.methods.bnbBalance().call(function(error, result) {
                if (error) { console.log(error); return false; };
                app.drip_contract_balance = app.toDec18(result);
            });

            $Contract_DripToken.methods.players().call(function(error, result){
                if (error) { console.log(error); return false; };
                app.drip_players = result;
            });
            // web3.eth.getTransactionCount('0x20f663cea80face82acdfa3aae6862d246ce0333', function(error, result) {
            //     console.log(result);
            // });
        },
        formatNum(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
    },
    filters: {
        DRIPtoUSD(value) { try { return app.formatNum((value * app.drip_usd).toFixed(2)) + "$"; } catch {} },
        BNBtoUSD(value) { try { return app.formatNum((value * app.bnb_usd).toFixed(2)) + "$"; } catch {} },
        toNum0(value) { try { return app.formatNum(parseFloat(value).toFixed(0)); } catch {} },
        toNum2(value) { try { return app.formatNum(parseFloat(value).toFixed(2)); } catch {} },
        toNum3(value) { try { return app.formatNum(parseFloat(value).toFixed(3)); } catch {} }

    },
    computed: {
        // account_list_ordered() {
        //     //return this.account_list;
        //     const ordered = Object.keys(this.account_list).sort().reduce(
        //         (obj, key) => { 
        //           obj[key] = this.account_list[key]; 
        //           return obj;
        //         }, 
        //         {}
        //       );
        //     return ordered;
        // }
    }

});



// ----------------------------------------------------------------------------------------
// -- BOOTSTRAP ---------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
$(".btn").mouseup(function(){
  $(this).blur();
}).mouseleave(function(){
  $(this).blur();
});