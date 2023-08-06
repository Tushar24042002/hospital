const mongoose = require('mongoose');


//connect to DB
// const dbURL = 'mongodb://localhost/hospital_API';
const dbURL = `mongodb+srv://tushargupta24042002:Tushar2002@hospital-api.cvallai.mongodb.net/hospital-api?retryWrites=true&w=majority`;
mongoose.connect(dbURL, { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});