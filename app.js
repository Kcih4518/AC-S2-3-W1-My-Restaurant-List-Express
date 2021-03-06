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

// Include alert from node_modules
const alert = require('alert')

// Handle request and response here
// to Get restaurant list by restaurant.json
app.get('/', (req, res) => {
  // past the movie data into 'index' partial template
  res.render('index', { restaurants: restaurantList.results })
})

// to Search restaurant by name or category
app.get('/restaurants/searches', (req, res) => {
  const keyword = req.query.keyword.trim()

  if (!keyword.length) {
    alert('抱歉請輸入關鍵字')
  }
  const restaurants = restaurantList.results.filter((restaurant) => {
    const category = restaurant.category
      .toLocaleLowerCase()
      .includes(keyword.toLocaleLowerCase())
    const name = restaurant.name
      .toLocaleLowerCase()
      .includes(keyword.toLocaleLowerCase())
    return name || category
  })
  if (!restaurants.length) {
    alert(`抱歉沒有符合 ${keyword} 的餐廳`)
  }

  res.render('index', { restaurants, keyword })
})

// to Get restaurant description by id
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(
    (restaurant) => restaurant.id.toString() === req.params.restaurant_id
  )
  res.render('show', { restaurant })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
