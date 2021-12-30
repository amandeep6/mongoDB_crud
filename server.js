//import modules
var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')
//create rest object
var app = express()
//set JSON as MIME type
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
//enable cors
app.use(cors())
//import fetch module
var fetch = require("./fetch/fetch")
//use fetch module
app.use("/fetch",fetch)
//import and use remaining modules
var insert = require("./insert/insert")
var update = require("./update/update")
var remov = require("./delete/delete")

app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",remov)

//create a port
let port = process.env.PORT || 8080

//assign port no
app.listen(port,()=>{
    console.log("Server listening port no ", port)
})


/*

    http://localhost:8080/fetch     GET
    http://localhost:8080/insert    POST
    http://localhost:8080/update    POST
    http://localhost:8080/delete    POST

*/