"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;
const items = require("./data/items");
const companies = require("./data/companies");
const handlers = require("./handlers");
express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/bacon", (req, res) => res.status(200).json("🥓"))

  .get("/items", (req, res) => {    
      res.status(200).json({ status: 200, message: "success", data: items });       
  })

  .get("/items/group/:criteria/:type", (req, res) => {
    const { criteria, type } = req.params;   
    
    if ( !criteria || !type)
      return res.status(400).json({ status: 400, message: "unknown criteria and type", data: {criteria, type} });
  
    const itemsSorted = items.filter((item)=>{        
          return item[criteria].toLowerCase().replace(/\s/g, "") === type.toLowerCase();       
    });    
    
    return res.status(200).json({ status: 200, message: "success", data: itemsSorted });    
  })

  .get("/companies", (req, res) => {  
      res.status(200).json({ status: 200, message: "success", data: companies });
  })
  .get("/item/:id", handlers.getSingleItem)

  .get("/company/:id/", handlers.getCompanyById)
  
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
