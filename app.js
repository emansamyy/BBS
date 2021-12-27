const express = require("express");
const mongoose = require("mongoose");
require('./models/db')
require('dotenv/config');
const cors = require('cors');
const bodyParser= require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
// const users =  User.find({})
app.use(express.json());
app.use(cors());

const routes = require('./routes/userroutes');

mongoose.connect(
  'mongodb+srv://emem:1234@cluster0.iarne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

           

app.get('/' , (req,res) =>{
res.sendFile(__dirname + '/public/home.html')

})
app.use(express.static('public'));
app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

app.use('/', routes);
app.use('/adduser', routes);


