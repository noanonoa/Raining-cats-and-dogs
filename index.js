//DEPENDENCIES --- MODULES
let express = require('express')
let fs = require('fs')
let layouts = require('express-ejs-layouts')
let methodOverride = require('method-override')

//DECLARATIONS
let port = 8000
let app = express()

//VIEW ENGINE
app.set('view engine', 'ejs')

//MIDDLEWARES
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
app.use(layouts)
app.use(methodOverride('_method'))
app.use('/cats', require('./controllers/cats'))
app.use('/dogs', require('./controllers/dogs'))

//ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

//WEB SERVER
app.listen(port, () => {
    console.log(`let's build this thing🐱🐶`)
})