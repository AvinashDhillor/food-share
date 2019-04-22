const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, err => {
  if (err) console.log('Error connecting to database');
  else console.log('Connected with database');
});

module.exports = mongoose;
