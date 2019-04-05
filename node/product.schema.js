var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
  isbn : {type:String,require:true},
  title : {type:String,require:true},
  price : {type:Number, require:true}
})

var ProductModel = mongoose.model('books',ProductSchema);
module.exports = ProductModel;
