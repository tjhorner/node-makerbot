var Makerbot = require('./index')
var creds = require('./example_creds.json')

var mb = new Makerbot(creds.access_token)

mb.getPrinters().then((response) => {
  console.log("Your printers:")

  var printers = response.printers

  for(var id in printers){
    var printer = printers[id]
    console.log(`${printer.name}: ${printer.status.current_process ? "Printing" : "Not printing"}, camera snapshot: ${printer.image_url}`)
  }
})