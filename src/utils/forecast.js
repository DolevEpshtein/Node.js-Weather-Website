const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/cbd0c6c662a6c1a03a53461380bfb566/' + latitude + ',' + longitude + '?units=si';
    
    request({ url, json: true }, (error, { body }) => {
      if (error) {
          callback('Unable to connect to weather service!', undefined)
      } else if (body.error) {
          callback('Unable to find location', undefined)
      } else {
          callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature 
          + ' degress out. The high today is ' + body.daily.data[0].temperatureHigh + ' and the low is ' 
          + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.');
      }
    })
}

module.exports = forecast