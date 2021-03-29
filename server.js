const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/html-routes.js");


//run express function
const app = express();

app.use(logger("dev"));

// Sets the initial port
const PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
 });

//Routes
const apiRoutes = require("./routes/api-routes")(app);
app.use(htmlRoutes);

// Listens for Port
app.listen(PORT,function(){
    console.log(`Express server listening on port ${PORT}` );
  });
