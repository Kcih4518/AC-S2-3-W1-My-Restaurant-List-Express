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

// setting static files
app.use(express.static('public'))

// require restaurant json file
const restaurantList = require('./restaurant.json')

// Handle request and response here
app.get('/', (req, res) => {
  // create a variable to store restaurantOne
  const restaurantOne = {
    id: 1,
    name: 'Sababa 沙巴巴中東美食',
    category: '中東料理',
    rating: 4.1,
    image:
      'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg',
  }

  // past the movie data into 'index' partial template
  res.render('index', { restaurants: restaurantList.results })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
