// server.js
// where your node app starts

// init project
const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const shortUrl = require("./models/shortUrl")

const app = express()
app.use(bodyParser.json())
app.use(cors()) 

//connect to database
mongoose.connect(process.env.MONGODB_URI);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/views'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:urlToShorten(*)", (request, response, next) => {
  var { urlToShorten } = request.params;
  
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  
  response.json({urlToShorten});
})
 


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
