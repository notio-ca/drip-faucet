var $WEB3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org:443"));
// https://abi.hashex.org/
$ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountEggs","type":"uint256"}],"name":"SeedsBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"seedsUsed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marketSeeds","type":"uint256"}],"name":"SeedsPlanted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"seedsSold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seedValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"marketSeeds","type":"uint256"}],"name":"SeedsSold","type":"event"},{"inputs":[],"name":"BusdAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DripAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DripBusdLp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DripVaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MarketingAndDevelopmentAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PancakeSwapRouter","outputs":[{"internalType":"contract IUniswapV2Router01","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PancakeSwapRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SEEDS_TO_GROW_1PLANT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buySeeds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"seeds","type":"uint256"}],"name":"calculateSeedSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateSeedsBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"}],"name":"calculateSeedsBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"}],"name":"calculateSeedsBuySimpleBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"}],"name":"calculateSeedsBuySimpleTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"}],"name":"calculateSeedsBuySimpleTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnb","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateSeedsBuyTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rt","type":"uint256"},{"internalType":"uint256","name":"rs","type":"uint256"},{"internalType":"uint256","name":"bs","type":"uint256"}],"name":"calculateTrade","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedSeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentBalanceMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTimeMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"devFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMyPlants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMySeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getSeedsSinceLastPlant","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserSeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hatcheryPlants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastPlant","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketSeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"plantSeeds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"seedMarket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellSeeds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_top","type":"uint256"},{"internalType":"uint256","name":"multiplier","type":"uint256"}],"name":"setBalanceMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_seed","type":"uint256"}],"name":"setSeedAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var $Contract = new $WEB3.eth.Contract($ABI, "0x685BFDd3C2937744c13d7De0821c83191E3027FF");

$ABI_LP = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var $Contract_LP = new $WEB3.eth.Contract($ABI_LP, "0xa0feB3c81A36E885B6608DF7f0ff69dB97491b58");

var $PCS_API = "https://api.pancakeswap.info/api/v2/tokens/";
// ----------------------------------------------------------------------------------------
// -- APP ---------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
var app = new Vue({
    el: '#app',
    data: {
      user: {
        wallet: "",
        plants: 1,
        seeds: 3000000
      },
      user_lp: 0,
      user_lp_per_day: 0,
      user_balance: 0,
      rate_plant_lp: 0,
      contract_balance: 0,
      seeds_per_plant: 2592000,
      seeds_per_day: 0,
      plant_per_day:0,
      plants_ready: 0,
      seeds_lost: 0,
      seeds_needed: 0,
      plant_next_date: [],
      plant_full_minute: 0,
      drip_busd: {
        step_calc: 0,
        price: 0,
        busd_price: 0,
        busd_reserve: 0,
        drip_price: 0,
        drip_reserve: 0,
        supply: 0,
        lp_ratio: 0
      },
      license: {},
      log: []
    },
    watch: {
        user: function () { this.userSave(); }
    },
    created: function () {
      this.userLoad();
      this.appTick();
      setInterval(this.appTick, 1 * 60 * 1000);
      setTimeout(this.appTick, 1000);
      this.updateDripBusd();
      // $("body").click(function () {
      //   app.inputWallet();
      // });
      this.auth();
      $("#app").show();
      loadMessage();
    },

    methods: {
      appTick() {
        this.updateData();
        this.updateDripBusd();
      },
      updateUI() {
        this.seeds_per_day = (this.user.plants * 86400);
        this.plant_per_day = (this.seeds_per_day / this.seeds_per_plant);
        this.plants_ready = Math.floor(this.user.seeds / this.seeds_per_plant);
        this.seeds_lost = this.user.seeds - (this.plants_ready * this.seeds_per_plant);
        this.seeds_needed = this.seeds_per_plant - this.seeds_lost;
        seeds_per_minute = this.seeds_per_day / 24 / 60;
        plant_next_minute = this.seeds_needed / seeds_per_minute;
        this.plant_full_minute = this.seeds_per_plant / seeds_per_minute;

        multi = 1;
        this.plant_next_date = [];
        if (this.plant_next_date.indexOf("NaN") == -1) {
          for (i = 0; i < 20; i++) {
            this.plant_next_date.push({plant:(i+1), minutes:(plant_next_minute + (this.plant_full_minute * i))});
          }
        }
      },
      updateData() {
        //if (!document.hasFocus()) { return false; }
        if (!this.checkWallet()) { return false; }
        $Contract.methods.getUserSeeds(this.user.wallet).call(function(error, result) {
          if (error) { console.log(error); return false; };
          app.user.seeds = result;
          app.updateUI();
        });
        $Contract.methods.hatcheryPlants(this.user.wallet).call(function(error, result) {
          if (error) { console.log(error); return false; };
          app.user.plants = result;
          app.updateUI();
          $Contract.methods.calculateSeedSell(app.user.plants * 86400).call(function(error, result) {
            if (error) { console.log(error); return false; };
            app.user_lp_per_day = app.toDec18(result * 0.95);
            app.updateUI();
          });
        });
        $Contract_LP.methods.balanceOf(this.user.wallet).call(function(error, result) {
          if (error) { console.log(error); return false; };
          app.user_balance = app.toDec18(result);
          app.updateUI();
        });
        $Contract.methods.getBalance().call(function(error, result) {
          if (error) { console.log(error); return false; };
          //console.log(result);
          app.contract_balance = app.toDec18(result);
        });
        $Contract.methods.SEEDS_TO_GROW_1PLANT().call(function(error, result) {
          if (error) { console.log(error); return false; };
          app.seeds_per_plant = result;
        });
        // $Contract.methods.marketSeeds().call(function(error, result) {
        //   if (error) { console.log(error); return false; };
        //   app.seeds_market = app.toDec18(result);
        // });
        // $Contract.methods.calculateSeedsBuy().call(function(error, result) {
        //   if (error) { console.log(error); return false; };
        //   console.log(result);
        // });
        $Contract.methods.calculateSeedSell(2592000).call(function(error, result) {
          if (error) { console.log(error); return false; };
          app.rate_plant_lp = app.toDec18(result * 0.95);
        });
        $Contract.methods.calculateSeedSell(this.user.seeds).call(function(error, result) {
          if (error) { console.log(error); return false; };
          app.user_lp = app.toDec18(result * 0.95);
        });
      },
      updateDripBusd() {
        this.drip_busd.step_calc = 0;

        $Contract_LP.methods.totalSupply().call(function(error, result) {
          if (error) { console.log(error); return false; };
          app.drip_busd.supply = app.toDec18(result);
          app.drip_busd.step_calc++;
          if (app.drip_busd.step_calc == 4) { app.calcDripBusd(); }
        });        
        $Contract_LP.methods.getReserves().call(function(error, result) {
          if (error) { console.log(error); return false; };
          app.drip_busd.drip_reserve = parseInt(result._reserve0);
          app.drip_busd.busd_reserve = parseInt(result._reserve1);
          app.drip_busd.step_calc++;
          if (app.drip_busd.step_calc == 4) { app.calcDripBusd(); }
        });
        $Contract_LP.methods.token0().call(function(error, result) {
          if (error) { console.log(error); return false; };
          API_Get($PCS_API + result, function (data) { 
            app.drip_busd.drip_price = parseFloat(data.data.price);
            app.drip_busd.step_calc++;
            if (app.drip_busd.step_calc == 4) { app.calcDripBusd(); }
          });
        });
        $Contract_LP.methods.token1().call(function(error, result) {
          if (error) { console.log(error); return false; };
          API_Get($PCS_API + result, function (data) { 
            app.drip_busd.busd_price = parseFloat(data.data.price);
            app.drip_busd.step_calc++;
            if (app.drip_busd.step_calc == 4) { app.calcDripBusd(); }
          });
        });

      },
      calcDripBusd() {
        app.drip_busd.lp_ratio = 1 / app.drip_busd.supply;
        app.drip_busd.price = (app.drip_busd.drip_reserve * app.drip_busd.lp_ratio * app.drip_busd.drip_price)
                            + (app.drip_busd.busd_reserve * app.drip_busd.lp_ratio * app.drip_busd.busd_price);
        app.drip_busd.price = app.toDec18(app.drip_busd.price);
        //console.log(app.drip_busd);
      },
      action(event, cmd) {
        var val = event.target.getAttribute("data-val");
        this.execute(cmd, val);
      },
      checkWallet() {
        this.user.wallet = this.user.wallet.replaceAll(" ", "");
        if (this.user.wallet.length != 42 || this.user.wallet.indexOf("0x") == -1) { return false; }
        return true;
      },
      inputWallet() {
        if (this.checkWallet()) { 
          this.userSave();
          setTimeout(function () { app.auth(); }, 1000);
        }
      },
      userLoad() {
        saved_data = $Cookie.get("USER-GARDEN");
        if (saved_data == undefined) { saved_data = JSON.stringify(this.user); }
        saved_data = JSON.parse(saved_data);
        this.user = saved_data;
        if (!this.checkWallet()) { this.user.wallet = ""; }
        this.updateUI();
      },
      userSave() {
        if (!this.checkWallet()) { this.user.wallet = ""; }
        this.user.wallet = this.user.wallet.toLowerCase();
        $Cookie.set("USER-GARDEN", JSON.stringify(this.user));
        console.log("User Saved");
        this.updateUI();
        this.updateData();
        //$('[data-toggle="tooltip"]').tooltip();
      },
      toDec18(num) {
        return num / 1000000000000000000;
      },
      donate() {
        window.location.replace("/donation");
      },
      auth() {
        if (this.checkWallet()) {
          if (this.user.wallet == "0xba3e8d7920d35271aefafded0317089f0efe56dd") { alert("Hi! Why do you refresh so many time?\n\nDM me on Telegram please: @LukeCharters"); }
          API_Get("https://drip-scan.goqc.ca/auth/" + this.user.wallet, function (data) { 
            created = new Date(0).setUTCSeconds(data.created);
            days_since_created = moment(Date.now()).diff(moment(created), "days");
            trial = 5;
            data["days_left"] = trial - days_since_created
            if (!data.auth) { app.donate(); }
            app.license = data;
            if (app.license.paid) { $Cookie.set("pop-ads", "1", 365); }
          });
          $Contract.methods.hatcheryPlants(this.user.wallet).call(function(error, result) {
            if (result > 0) {
              API_Get("https://drip-scan.goqc.ca/is-garden/" + app.user.wallet, function (data) {});
            }
          });    
        }
      }
    },
    filters: {
      decimal_3(value) { value = parseFloat(value).toFixed(3); if (value == "NaN") { value = 0; } return value; },
      decimal_2(value) { value = parseFloat(value).toFixed(2); if (value == "NaN") { value = 0; } return value; },
      decimal_4(value) { value = parseFloat(value).toFixed(4); if (value == "NaN") { value = 0; } return value; },
      decimal_all(value) { 
        value = value.toString();
        if (value.indexOf(".") == -1) { return value; }
        arr_value = value.split(".");
        try { value = arr_value[0] + ". " + arr_value[1].substring(0, 3); } catch {}
        return value;
      },
      removeDec(num) { return num.toString().split(".")[0]; },
      numSpace(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      },
      minToDate(minutes) {
        //return minutes / 60;
        return moment().add(minutes, 'minutes').format('dddd - MMMM D - h:mm A');
      },
      hourToTime(hour) {
        days = moment.duration(hour, 'hours').days() + "d ";
        if (days == "0d ") { days = ""; };
        min = moment.duration(hour, 'hours').minutes();
        if (min <= 9) { min = "0" + min; }
        return days + moment.duration(hour, 'hours').hours() + ":" + min;
      }
    }
  });


function hourChanged() {
  $Contract.methods.calculateSeedSell(2592000).call(function(error, result) {
    if (error) { console.log(error); return false; };
    app.rate_plant_lp = app.toDec18(result * 0.95);
    if (document.location.host.indexOf("localhost") != -1) {
      $("#log").append(new Date().getHours() + ":00 LP / Day: " + (app.rate_plant_lp * app.plant_per_day).toFixed(3) + " - " + (app.rate_plant_lp * app.plant_per_day * app.drip_busd.price).toFixed(2) + "$<br>");
    }
  });
}
var $lastHour = new Date().getHours();
setInterval(function () { if (new Date().getHours() != $lastHour) { $lastHour = new Date().getHours(); hourChanged(); } }, 1000);

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  
  $("#nav > a").click(function () {
    $("#nav > a").removeClass("active");
    $(this).addClass("active");
    $(".view").removeClass("active");
    $("#view-" + $(this).data("view-id")).addClass("active");
  });

});


// CHARTS ------------------------------------------------------------------------------------------
var chart = null;
$(document).ready(function () {
  $(window).resize(function () {
    try { 
      chart.applyOptions({ width: window.innerWidth - 50, height: (window.innerHeight / 1.5) - 50 }); 
      chart.timeScale().fitContent();
    } catch {}
  });
  $("#nav-chart > a").click(function () {
    $("#but-chart-user-data").data("url", "https://drip-scan.goqc.ca/data/userdata/" + app.user.wallet.toLowerCase() + "-lp-per-day.json");
    $("#nav-chart > a").removeClass("active");
    $(this).addClass("active");
    title = $(this).text();
    url = $(this).data("url");
    note = $(this).data("note");
    if (note != "") { title += "<br><span>" + note + "</span>"; }
    $("#chart-note").html(title);
    getChartData(url);
  });
  $("#nav-chart > a:first-child").click();
});


function getChartData(url) {
  $("#chart").html("");
  chart = LightweightCharts.createChart(document.getElementById("chart"), {
    width: window.innerWidth - 50,
    height: (window.innerHeight / 2) - 50,
    priceScale: {
      scaleMargins: {
        top: 0.2,
        bottom: 0.2
      },
      borderVisible: false
    },
    priceFormat: {
        type: 'price',
        precision: 5,
        minMove: 0.001,
    },
    layout: {
      backgroundColor: "#131722",
      textColor: "#d1d4dc"
    },
    grid: {
      vertLines: { color: "rgba(42, 46, 57, 0)" },
      horzLines: { color: "rgba(42, 46, 57, 0.6)" }
    }
  });

  var areaSeries = chart.addAreaSeries({
    topColor: "rgba(34,113,177, 0.56)",
    bottomColor: "rgba(34,113,177, 0.04)",
    lineColor: "rgb(34, 113, 177)",
    lineWidth: 2,
    priceFormat: {
      type: 'price',
      precision: 3,
      minMove: 0.001,
    },
  }); //chart.addLineSeries();
  chart.timeScale().applyOptions({ timeVisible: true });
  $(window).resize();

  API_GetText(url, function (data) { 
    if (data == "") { $("#chart-note").html("Sorry, no data yet<br>Please come back in 1 hour"); return false; }
    chart_data = JSON.parse("[" + data.slice(0, -1) + "]");
    for (idx=0; idx<chart_data.length; idx++) {
      chart_data[idx]["time"] = parseInt(chart_data[idx]["time"]);
      chart_data[idx]["value"] = parseFloat(chart_data[idx]["value"]);
      //console.log(moment.unix(chart_data[idx]["time"]).format("YYYY-MM-DD HH:mm:ss") + " : " + chart_data[idx]["value"] + " " + chart_data[idx]["time"])
    }
    areaSeries.setData(chart_data);
    fit = true;
    if (fit) {
      chart.timeScale().fitContent();
    } else {
      fromDate = new Date();
      fromDate.setMonth(fromDate.getMonth() - 1);
      chart.timeScale().setVisibleRange({
        from: fromDate.getTime() / 1000,
        to: (new Date()).getTime() / 1000,
      });
    }
  });
}