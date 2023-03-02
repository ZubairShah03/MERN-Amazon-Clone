const express = require("express");
const mongoose = require("mongoose")

mongoose.set('strictQuery', true);  // to Ignore the DeprecationWArning
//to connect the databse
mongoose.connect("mongodb://127.0.0.1:27017/amazonProducts", {
  // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
  console.log("Database Connected Successfully");
}).catch((e)=>{
  console.log("db Not Connected")
})
