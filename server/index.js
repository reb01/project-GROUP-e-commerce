"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;
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

//   app.post("/order", (req, res) => {
//     console.log(req.body);
//     const firstName = req.body.givenName;
//     const lastName = req.body.surname;
//     const email = req.body.email;
//     const streetAddress = req.body.address;
//     const country = req.body.country;
//     const bottle = stock.bottle;
//     const socks = stock.socks;

   
//  if (!email.includes("@")) {
//         res.status(400).json({
//             status: "error",
//             error: "missing-data",
//         });
//     } else if (country !== "Canada" && country !== "Canada".toLowerCase()) {
//         res.status(400).json({
//             status: "error",
//             error: "undeliverable",
//         });
//     } else if (bottle === "0") {
//         res.status(400).json({
//             status: "error",
//             error: "unavailable",
//         });
//     } else if (socks === "0") {
//         res.status(400).json({
//             status: "error",
//             error: "unavailable",
//         });
//     } else if (stock.shirt.small === "0" && req.body.size === "small") {
//         res.status(400).json({
//             status: "error",
//             error: "unavailable",
//         });
//     } else if (stock.shirt.medium === "0" && req.body.size === "medium") {
//         res.status(400).json({
//             status: "error",
//             error: "unavailable",
//         });
//     } else if (stock.shirt.large === "0" && req.body.size === "large") {
//         res.status(400).json({
//             status: "error",
//             error: "unavailable",
//         });
//     } else if (stock.shirt.xlarge === "0" && req.body.size === "extralarge") {
//         res.status(400).json({
//             status: "error",
//             error: "unavailable",
//         });
//     } else {
//         res.status(200).json({
//             status: "success",
//         });
//     }
// });

  .get("/bacon", (req, res) => res.status(200).json("🥓"))


  .get("/items", handlers.getItems)

  .get("/items/group/:criteria/:type", handlers.getItemsGroup)

  .get("/companies", handlers.getCompagnies)

  .get("/item/:id", handlers.getSingleItem)

  .get("/company/:id/", handlers.getCompanyById)
  
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
