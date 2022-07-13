import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

ReactDOM.render(<App />, document.getElementById("root"));

let port = process.env.PORT;
if (port == null || port == ""){
  port = 3000;
}

app.listen(3000, function() {
  console.log("Server has started successfully");
});
