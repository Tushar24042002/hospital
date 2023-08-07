const mongoose = require('mongoose');


const dbURI = 'mongodb+srv://tushargupta24042002:Tushar24042002@cluster0.h9cmx1x.mongodb.net/hospitalapp?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});
