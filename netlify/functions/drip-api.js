const fetch = require('node-fetch')

const API_ENDPOINT = 'http://crypto.xqub.ca/drip-api/0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08'

exports.handler = async (event, context) => {
  let res, data
  try {
    res = await fetch(API_ENDPOINT);
    data = await res.json();
    //data = { symbol:"drip", price: Math.round(data[data.length-1].value * 100) / 100 };
    
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
    body: JSON.stringify(data)
  }
}