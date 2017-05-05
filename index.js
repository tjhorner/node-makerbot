var request = require('request-promise')

var Makerbot = function(accessToken){
  var API_BASE = "https://reflector.makerbot.com/"

  var headers = { "Authorization": `Bearer ${accessToken}` }

  var _get = (endpoint, qs = { }) => {
    return request(API_BASE + endpoint, { json: true, qs, headers })
  }

  var _post = (endpoint, body = { }, qs = { }) => {
    return request.post(API_BASE + endpoint, { json: true, body, qs, headers })
  }

  this.getPrinters = () => {
    return _get("printers")
  }

  this.getPrinter = (printer_id) => {
    return _get(`printers/${printer_id}`)
  }

  this.callPrinter = (printer_id) => {
    return _post(`call`, { printer_id })
  }
}

module.exports = Makerbot;