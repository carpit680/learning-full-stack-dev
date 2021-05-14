const express = require("express")
const body_parser = require("body-parser")
const request = require("request")
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: "b6e2913fcb8018e41c08ef7e2e40b2c0-us1",
  server: "us1",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}
const app = express()

app.use(express.static("public"))

app.use(body_parser.urlencoded({extended: true}))

app.get("/", function (req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function (req, res){
 var first_name = req.body.f_name
 var last_name = req.body.l_name
 var email = req.body.email

 var data = {
     
 }
})

app.listen(3000, function (){
    console.log("Server is now running at port 3000.")
})

// list_id = "d0308c155e"