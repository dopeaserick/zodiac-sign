var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var algorithm = require('./practice.js')
var axios = require('axios')

var app = express()

app.set('view engine', 'ejs')


app.use(express.static('views'))
app.use(logger('dev'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.set('views', __dirname + '/views')

app.get('/', function(request, response){
    response.render('home.ejs')
})

app.post('/', function(request, response){
    var bday = request.body.bday
    var bdayResults = algorithm.formatBday(bday)
    var result = algorithm.getZodiac(bdayResults[0], bdayResults[1], bdayResults[2])
    
    var url = 'http://widgets.fabulously40.com/horoscope.json?sign='+result
    
    axios.get(url)
    .then(function(res){
        response.render('results.ejs', {
            result: result,
            data: res.data.horoscope.horoscope
        })        
    })
    .catch(function(err){
        console.log(err)
    })
    
    // response.render('results.ejs', {
    //     data: result
    // })
})



var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('Server running on port:' + port)
})


