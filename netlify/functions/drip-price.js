const fetch = require('node-fetch')

const API_ENDPOINT = 'https://api.drip.community/prices/'

exports.handler = async (event, context) => {
  let res
  try {
    res = await fetch(API_ENDPOINT)
    
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
    body: JSON.stringify({
      data: res
    })
  }
}