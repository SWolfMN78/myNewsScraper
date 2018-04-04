const express = require("express");
const expHndlBar = require("express-handlebars")
const mongoose = require("mongoose");
const bodPar = require("body-parser");
const cheerio = require("cheerio");
const request = require("request"); //trying withy request first as requested by the TA hahah punny!
const logger = require("morgan");

//remember to insure that all of the applications of modles needs  ****
import db from "./models";

//set the port to link up to.
const PORT = 3000;

//initialize our Express
var app = express();

//log request utilizing morgan logger
app.use(logger("dev"));
//utilize the body-parser to manage the form submissions
app.use(bodPar.urlencoded({ extended: true }));
//Serve my public folder it's informatoin for the static directory

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});