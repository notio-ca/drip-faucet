const fetch = require('node-fetch')

const API_ENDPOINT = 'https://charters.herokuapp.com/drip-faucet/'

exports.handler = async (event, context) => {
  let res, data
  try {
    param = event.path.split("/");
    param = param[param.length-1];
    res = await fetch(API_ENDPOINT + param);
    data_api = await res.json();
    data = data_api;
    
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/javascript' },
    body: JSON.stringify(data)
  }
}