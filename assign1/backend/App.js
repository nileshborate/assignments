//import express from "express"
const express = require("express")
const cors =  require("cors")
const bodyParser = require("body-parser");
const { getMovies } = require("./moviedata");

const app = express();
const port = 5000;

app.use(bodyParser.json())
app.use(cors())

app.use("/",getMovies)

app.listen(port,()=>console.log("Server is listening port 5000"))


console.log("Hello")