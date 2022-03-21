//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())

let counter = 0

//Set up routes in express -

//Here we tell express : "When a GET request is sent to /, call this handler function"
//  https://expressjs.com/en/starter/basic-routing.html
//Express will *always* pass 2 objects to our handler function (wether we use them or not!)
// req - is an object that express gives us to access data about the HTTP request
//  https://expressjs.com/en/4x/api.html#req
// res - is an object that express gives us and we can use to send data back in the HTTP response
//  https://expressjs.com/en/4x/api.html#res

app.get("/", (req, res) => {

  //Send back JSON to the client
  res.json({msg: 'hello!'})
})

// GET /bye
app.get("/bye", (req, res) => {
  res.json({msg: 'goodbye!'})
})

// DELETE /bye
app.delete("/bye", (req,res) => {
  res.json({msg: 'goodbye forever!'})
})

/**
 * A GET /greeting route that returns the json object {greeting: 'good day'}
 */
app.get("/greeting", (req, res) => {
  counter++
  res.json({greeting: 'good day'})
})

/*A GET /greeting/morning route that returns {greeting: 'good morning'}*/
app.get("/greeting/morning", (req, res) => {
  counter++
  res.json({greeting: 'good morning'})
})

/*A GET /greeting/afternoon route that returns {greeting: 'good afternoon'}
*/
app.get("/greeting/afternoon", (req, res) => {
  counter++
  res.json({greeting: 'good afternoon'})
})

/*
A DELETE /greeting route that returns {greeting: 'good bye'}
*/
app.delete("/greeting", (req, res) => {
  counter++
  res.json({greeting: 'good bye'})
})

/*
Add a new route, GET /count that returns the value of the counter.
*/
app.get("/count", (req, res) => {
  res.json({count: counter})
})


//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})