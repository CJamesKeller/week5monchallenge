
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var ListingSchema = mongoose.Schema({});

var ApartmentSchema = mongoose.Schema({
  rent : Number,
  sqft : Number,
  city : String
});

var HouseSchema = mongoose.Schema({
  cost : Number,
  sqft : Number,
  city : String
});

var Listings = mongoose.model("listings", ListingSchema, "listings");
var Apartments = mongoose.model("apartments", ApartmentSchema, "listings");
var Houses = mongoose.model("houses", HouseSchema, "listings");

// *** Changed the names here ***

router.get("/", function(req,res){
  Listings.find({}, function(err, listings){
    if(err){
      console.log("Mongo Error: ", err);
      res.send(500);
    }

    res.send(listings);
  });
});

router.post("/house", function(req,res){
  var listing = req.body;
  var newHouse = new Houses();
    newHouse.city = listing.city;
    newHouse.sqft  = listing.sqft;
    newHouse.cost = listing.cost;
    newHouse.save(function(err, savedHouse){
    if(err){
      console.log("Error: ", err);
      res.sendStatus(500);
    }
    res.send(savedHouse);
  });
});

router.post("/apartment", function(req,res){
  var listing = req.body;
  var newApartment = new Apartments();
    newApartment.city = listing.city;
    newApartment.sqft  = listing.sqft;
    newApartment.cost = listing.cost;

  newApartment.save(function(err, savedApartment){
    if(err){
      console.log("Error: ", err);
      res.sendStatus(500);
    }

    res.send(savedApartment);
  });
});

module.exports = router;
