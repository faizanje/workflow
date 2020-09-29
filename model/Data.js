const mongoose = require('mongoose');
const Schema = mongoose.Schema
let Data = new Schema({
    name: String,
    jobs:[{
            id: Number,
            name: String,
            sold: String,//date
            packet: Number,
            drawing: Number,
            mat: Number,
            misc: Number,
            fab: Number,
            powder: Number,
            install: Number,
            complete: String,//date
            projection: Number,
            color:String
    }],
    avlfabricator:[{
        id:Number,
        date:String,//date
        avl:Number}],
    avlinstaller:[{
        id:Number,
        date:String,//date
        avl:Number}],
},
{
    collection:'Data'
});
module.exports = mongoose.model('Data',Data)