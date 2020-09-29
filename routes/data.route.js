const express = require('express')
const dataRoutes = express.Router()
let Data  = require('../model/Data')
dataRoutes.route('/add').post(function(req,res){
    let data = new Data(req.body)
    data.save()
    .then(()=>{
        res.status(200).json({'Data': 'Data added successfully!'})
    })
    .catch(()=>{
        res.status(400).send('Unable to add data')
    })
})
dataRoutes.route('/').get(function(req,res){
    Data.find(function(err,data){
        if(err) console.log("Error in getting document:",err)
        else  res.json(data)
    })
})
dataRoutes.route('/delete/:id').get(function(req,res){
    Data.findByIdAndRemove({_id:req.params.id},function(err,data){
        if(err) res.json(err)
        else{
            res.json("Successfully removed")
    }
    })
})
module.exports = dataRoutes