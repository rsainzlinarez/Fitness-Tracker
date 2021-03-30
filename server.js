const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const htmlRoutes = require("./routes/html-routes.js");
const apiRoutes = require("./routes/api-routes.js");


// Sets the initial port
const PORT = process.env.PORT || 3000;

//run express function
const app = express();

app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
 });

//Routes
// const apiRoutes = require("./routes/api-routes")(app);
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


// Listens for Port and mongoose connection
const db = mongoose.connection;
db.on('error', (err) => console.log(`error in connection: , ${err.message}`));

mongoose.connection.once('open', () => {
  console.log('mongoose connected!');
  app.listen(PORT,function(){
    console.log(`Express server listening on http://localhost:${PORT}` );
  });
});


  