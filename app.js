const express = require("express");
const mongoose = require("mongoose");
require('./models/db');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const cors = require('cors');
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');

const routes = require('./routes/userroutes');
const oroutes=require('./routes/donationRoutes');


mongoose.connect(
 process.env.connectionString,
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

  //  eman188849

app.get('/' , (req,res) =>{
res.sendFile(__dirname + '/public/home.html')

})
app.use(express.static('public'));
app.listen(process.env.PORT, () => {
  console.log("Server is running at port 5000");
});
// eman188849

app.use("/" , routes);
app.use('/adduser', routes);
app.use('/checkuser' , routes);
app.use('/signup' , routes);
app.use('/deleteuser' , routes);

app.get("/users" ,routes);
//app.set('view engine' , 'ejs');

//omar187463

//app.use("/donation" , oroutes);
app.use(express.urlencoded({extended:true}));
const donationRouter = require('./routes/donationRoutes');
app.use(donationRouter);
app.post('donor',(req,res)=>{
  console.log(req.body);
})



