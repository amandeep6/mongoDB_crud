//import modules
const express = require('express')
let mongodb = require('mongodb')
//create mongo client
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//import url
let url = require("../url")
//create get rest api
router.get("/",(req,res)=>{
    mcl.connect(url,(err,conn)=>{
        if(err)
            throw err
        else
        {
            let db = conn.db("nodedb")
            db.collection("products").find().toArray((err,array)=>{
                if(err)
                    throw err
                else
                {
                    console.log("Data sent")
                    res.json(array)
                }
            })
        }
    })
})
//export router
module.exports = router