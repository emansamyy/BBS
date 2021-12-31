<<<<<<< HEAD
// eman188849
=======
>>>>>>> f873c8018effb086c9339e3163eb723ddf219948
const express = require("express");
const mongoose = require("mongoose");
require("./models/db");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const routes = require("./routes/userroutes");

mongoose.connect(process.env.connectionString, {
  useNewUrlParser: true,

<<<<<<< HEAD
  useUnifiedTopology: true,
});
=======
mongoose.connect(
 process.env.connectionString,
  {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
  }
);
>>>>>>> f873c8018effb086c9339e3163eb723ddf219948
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfullyyy");
});

//  eman188849

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
app.use(express.static("public"));
app.listen(process.env.PORT, () => {
  console.log("Server is running at port 5500");
});
// eman188849
<<<<<<< HEAD
app.use("/", routes);
app.use("/adduser", routes);
app.use("/deleteuser", routes);
app.use("/updateuser", routes);

//omar187463


app.use("/", routes);
app.use("/addDonation", routes);
=======

app.use("/" , routes);
app.use('/adduser', routes);
app.use('/checkuser' , routes);
app.use('/signup' , routes);
>>>>>>> f873c8018effb086c9339e3163eb723ddf219948
