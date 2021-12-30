//import modules
const express = require('express')
let mongodb = require('mongodb')
//create mongo client
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//import url
let url = require("../url")
//create rest api
router.post("/",(req, res)=>{
    var p_id = req.body.p_id    
    var obj = {
        "p_id" : p_id,
    }
    mcl.connect(url,(err,conn)=>{
        if(err)
            throw err
        else
        {
            let db = conn.db("nodedb")
            db.collection("products").deleteOne(obj,(err,result)=>{
                if(err)
                {
                    res.json({'delete':'failed'})
                }
                else
                {
                    console.log("Data inserted")
                    res.json({'delete':'success'})
                }
            })
        }
    })
})

//export router
module.exports = router