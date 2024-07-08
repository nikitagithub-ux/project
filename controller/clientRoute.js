const express = require("express");
const clientRoute = express.Router();
const cleintSchema = require("../model/clientSchema");
const clientSchema = require("../model/clientSchema");
const mongoose = express("mongoose");

clientRoute.get("/",(req,res)=>{
    clientSchema.find((err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})

module.exports = clientRoute;