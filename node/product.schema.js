var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
  isbn : {type:String,require:true},
  title : {type:String,require:true}
})

var ProductModel = mongoose.model('products',ProductSchema);
module.exports = ProductModel;
