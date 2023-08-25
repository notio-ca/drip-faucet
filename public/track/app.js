var app = new Vue({
    el: '#app',
    data: {
      user: [],
      chart_cycle: 20,
      chart_cycle_count:-1
    },
    created: function () {
      (async function () {
        user_key = document.location.search.replace("?","");
        if (user_key == "") { user_key = "default"; } 
        user_data = await jsondb.load("user/" + user_key);
        app.user = user_data;
        setTimeout(app.updateData, 100);
        setInterval(app.updateData, 30000);
      })();
    },

    methods: {
      updateData() {
        (async function () {
          app.chart_cycle_count++;
          if (app.chart_cycle_count > app.chart_cycle) { app.chart_cycle_count = 0; }

          for (var wallet of app.user) {
            wallet.address = Web3.utils.toChecksumAddress(wallet.address);
            for (var chain of wallet.chains) {
              chain_info = $CHAINS.getChain(chain.chainId);
              chain.name = chain_info.name;
              chain.symbol = chain_info.nativeCurrency.symbol;
              await $PRICE.get(chain);
              chain.logo = chain_info.logo;
              chain.qty = await $RPC.getBalance(wallet.address, chain.chainId) / 1e18;
              chain.qty = chain.qty.toFixed(4);
              chain.value = (chain.qty * chain.price).toFixed(2);
              chain.price = chain.price.toFixed(chain_info.decimals_price);

              for (var asset of chain.assets) {
                try {
                  contract_info = await $RPC.getContractInfo(asset.address);
                  asset.name = contract_info.name;
                  asset.logo = contract_info.logo;
                  if (asset.symbol == undefined || asset.symbol == "") {
                    asset.symbol = contract_info.symbol;
                  }
                  for (var param_idx in asset.params) {
                    if (asset.params[param_idx] == "_WALLET_ADDRESS_") { asset.params[param_idx] = wallet.address; }
                  }
                  if (!asset.func.startsWith("_")) {
                    asset.qty = await $RPC.call(contract_info, asset.func, asset.params);
                    if (asset.output != undefined && asset.output != -1) { asset.qty = asset.qty[asset.output]; }
                  } else {
                    asset.qty = await $RPC.custom_func(contract_info, asset);
                  }
               
                  asset.qty = asset.qty / Math.pow(10, contract_info.decimals);
                  if (asset.calc != undefined && asset.calc != "") { eval("asset.qty = asset.qty " + asset.calc); }
                  // if (contract_info.address.toLowerCase() == "0xa9ea52d60111073e34fad966c03f70684e5b205d".toLowerCase()) {
                  //   console.log(asset.qty);
                  // }  
                  await $PRICE.get(asset);
              
                  
                  asset.value = (asset.qty * asset.price).toFixed(2);
                  asset.price = asset.price.toFixed(contract_info.decimals_price);
                  asset.qty = asset.qty.toFixed(contract_info.decimals_qty);

                  // CHARTS DATA
                  if (asset.chart && app.chart_cycle_count == 0) {
                    chart_data = { "time": parseInt(Date.now() / 1000), "value":parseFloat(asset.value) }
                    data_key = "chart/" + wallet.address + "/" + contract_info.address + "-" + asset.func.toLowerCase();
                    await jsondb.add(data_key, chart_data);
                    //console.log("https://defidata.link/editor/?" + data_key);
                  }

                  asset.error = false;
                } catch(error) {
                  //console.log(asset);
                  asset.error = true;
                  // asset.value = "ERROR";
                  // console.log(asset.value);
                  // console.log(contract_info);
                }
                app.$forceUpdate();
              }
            }
            app.$forceUpdate();
          }

        })();
      }
    },    
    filters: {
      decimal_3: function (value) {
        value = parseFloat(value).toFixed(3);
        if (value == "NaN") { value = 0; } 
        return value;
      },
      numSpace(x) {
        try {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        } catch (error) {
          return "";
        }
      },
    }
});

async function showChart() {
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
  minMoveDict = [1, 0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001, 0.0000001, 0.00000001, 0.000000001, 0.0000000001];
  minMove = minMoveDict[2];

  var areaSeries = chart.addAreaSeries({
    topColor: "rgba(34,113,177, 0.56)",
    bottomColor: "rgba(34,113,177, 0.04)",
    lineColor: "rgb(34, 113, 177)",
    lineWidth: 2,
    priceFormat: {
      type: 'price',
      precision: 2,
      minMove: minMove,
    },
  }); 
  chart.timeScale().applyOptions({ timeVisible: true });  

  chart_data = await jsondb.load("chart/0x287c7d1638e5771947bcdcbd8b174fac4cf37e08/0xcf630283e8ff2e30c29093bc8aa58cadd8613039-balanceof");
  console.log(chart_data);
  areaSeries.setData(chart_data);
  chart.timeScale().fitContent();
}