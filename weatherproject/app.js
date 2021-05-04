const express = require("express")
const https = require("https")
const body_parser = require("body-parser")

const app = express()
var city = "Paris"
var apikey = "b12cccf73e42c3ad641845e320444457"
var units = "metric"

app.use(body_parser.urlencoded({extended: true}))

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    city = req.body.CityName
    https.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey + "&units=" + units, function ( response){
    response.on("data", function (data){
        const weather_data = JSON.parse(data)
        var weather = String(weather_data.main.feels_like)
        const icon = "http://openweathermap.org/img/wn/" + weather_data.weather[0].icon + "@2x.png"
        res.write("<h1>The temperature in " + city + " feels like " + weather + " degrees Celcius.<h1>")
        res.write("<h2>" + weather_data.weather[0].description + "<h2>\n")
        res.write("<img src=" + icon + " alt=\"Italian Trulli\">")
        res.send()
    })
    })
})




app.listen(3000, function () {
    console.log("Server started at port 3000.")
})