const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  imageUrl: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  location: {
    lat: {},
    lon: {}
  },
  phoneNo: {
    type: String,
    required: true
  },
  des: {
    type: String
  },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: '12h' }
  }
});

const foodmodel = mongoose.model('food', foodSchema);

module.exports = Food = foodmodel;
