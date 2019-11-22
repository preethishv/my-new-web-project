const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const todosRoutes = require("./routes/todos");

const app = express();

mongoose.connect('mongodb://localhost/todos',
{useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection
.once('open', () => console.log('mongoose connection opened'))
.on('error', (err) => {
    console.warn('Warning',err);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/todos", todosRoutes);


module.exports = app;
