# csv > json > api

This module can convert csv data into json data then creates a REST api call to a server.

# IMPORTANT NOTICE
none of this works. this is just a placeholder readme and this is how the program will work when it is finalized.
## Usage
### Programatically
```javascript
const csvapi = require("csvapi")
csvapi("filename.csv", "https://api.requestaddress.com")
csvapi.toFile("filename.csv", "filename.json") 
console.log(csvapi.returnData("filename.csv")
```
### Command line
```
$ npm install -g csvapi
$ csv src/cmdline.js examples/example.csv https://api.example.com
```
## Contributing
Please see CONTRIBUTING
