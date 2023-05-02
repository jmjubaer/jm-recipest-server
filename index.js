const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const chefData = require('./data/ChefInfo.json');
const recipeData = require('./data/recipe.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running at http://localhost:5000')
})

app.get('/chefs', (req, res) => {
    res.send(chefData)
  })

app.get('/recipes', (req, res) => {
    res.send(recipeData)
  })

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })