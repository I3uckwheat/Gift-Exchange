const mongoose = require('mongoose');

// Set up mongoose
const mongoDB = 'mongodb://localhost:27017/gift'; // TODO - put in env var
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);

// Require Models
require('./models/User.js');

const app = require('./app.js');
app.listen(3001);
