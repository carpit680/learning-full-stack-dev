const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res){
    res.send(String(parseInt(req.body["num1"]) + parseInt(req.body["num2"])));
})
app.listen(3000);
