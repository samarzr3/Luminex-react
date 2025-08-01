
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  oldPrice: Number,
  image: String,
  badge: String,
  badgeColor: String
});

module.exports = mongoose.model('Product', productSchema);
