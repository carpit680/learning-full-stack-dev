const express = require("express")
const body_parser = require("body-parser")
const https = require('https')
const date = require("./date.js")
const app = express()

var items = ["Buy food.","Cook food.","Eat food."]
var work_items = []

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.get("/", function (req, res){
    
    res.render('list', {list_title: date.myDate(), item_added: items})
})

app.post('/', function(req, res, next){
    // req.body contains the parsed body of the request.
    var item = req.body.new_item

    if(item != ""){
        if(req.body.list === "Work"){
            work_items.push(item)
            res.redirect("/work")
        }
        else{
            items.push(item)
            res.redirect("/")
        }
    }
});

app.get("/work", function (req, res){
    res.render('list', {
        list_title: "Work List", 
        item_added: work_items
    })
})

app.post('/work', function(req, res, next){
    // req.body contains the parsed body of the request.
    var item = req.body.new_item
    if(item != ""){
        items.push(item)
    }
    res.redirect("/work")
});

app.get("/about", function (req, res){
    res.render('about')
})

app.listen(3000, function(){
    console.log("Server started on port 3000.")
})