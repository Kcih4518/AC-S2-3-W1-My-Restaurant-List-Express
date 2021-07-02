// Include express from node_modules
const express = require('express')
const app = express()

// Define server related variables
const port = 3000

// require express-handlebars here
const exphdbs = require('express-handlebars')

// setting template engine
// Param 1 : The name of the template engine
// Param 2 : Default layout file name 'main'
app.engine('handlebars', exphdbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Handle request and response here
app.get('/', (req, res) => {
  res.send('hello from simple server :)')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
