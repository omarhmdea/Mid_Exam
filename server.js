const express = require("express")
const path = require("path")
const urllib = require("urllib");


const app = express()
app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/recipes/:ingredient', function (request, response) {
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${request.params.ingredient}`, function (err, data, res) {
        console.log(data);
        response.send(data);

    })
})

const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
