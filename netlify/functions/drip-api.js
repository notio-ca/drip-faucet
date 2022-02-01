const fetch = require('node-fetch')

const API_ENDPOINT = 'http://crypto.xqub.ca/drip-api/0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08'

exports.handler = async (event, context) => {
  let res, data
  try {
    res = await fetch(API_ENDPOINT);
    data_api = await res.json();
    param = event.path.split("/");
    param = param[param.length-1];
    data = { data_api:data_api, url:param };
    
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