# Makerbot API

Node module for the _(assuming)_ undocumented Makerbot API.

With it, you can do things like get a user's printers, print to them, and get their status. Login is done through Thingiverse (which is actually just a Makerbot account), so you will need to get that access token from somewhere else.

## Usage Example

```js
const Makerbot = require('makerbot') // require makerbot module
const mb = new Makerbot("THINGIVERSE_ACCESS_TOKEN") // make a Makerbot instance

// get the user's 3D printers
mb.getPrinters().then((response) => {
  // printers will be inside of `response.printers`
  var printers = response.printers
})
```

## TODO

Lots of stuff. I just made this based on what I can do from home. I still need to set up remote access to my school's 3D printers so I can test all of the other API calls and stuff. Stay tuned!

Here are the most important things to get done:

- Printing to printers
- Print from thingiverse library