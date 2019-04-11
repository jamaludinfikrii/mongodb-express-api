const url = require('./../database')
var mongodb = require('mongodb')
var mongoClient = require('mongodb').MongoClient

module.exports = {
    getAllUsers : (req,res) => {
        mongoClient.connect(url,(err, db) => {
            var users = db.collection('users')
            users.find({}).toArray((err,result) => {
                if(err) throw err
                console.log(result)
                res.send(result)
            })
        })
    },
    getUserById : (req,res) => {
        var terserah = req.params.id
        console.log(terserah)
        mongoClient.connect(url , (err,db) => {
            var table = db.collection('users')
            table.find({ _id : mongodb.ObjectId(terserah) }).toArray((err,result) => {
                if(err) throw err
                res.send(result)
            })
        })
    },
    addData : (req,res) => {
        console.log('POST/DATA')
        var newData = req.body
        mongoClient.connect(url , (err,db) => {
            var table = db.collection('users')
            table.insert(newData , (err,result) => {
                if(err) throw err
                res.send(result)
            })
        })
    },
    updateData : (req,res) => {
        // var data = req.body
        mongoClient.connect(url , (err,db)=>{
            db.collection('users')
            .update({_id : mongodb.ObjectId(req.params.id)},
                    {$set : {username : req.body.user}},
                    (err,result) => {
                        if(err) throw err
                        res.send(result)
                    })
        })
    }
}