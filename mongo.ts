// Import HTTP module from node.js
console.log("Startup mongo.js");
import http = require("http");
import url = require("url");
import mongodb = require("mongodb");
import fs = require("fs");
//import * as http from "http";
//import * as url from "url";
//import * as mongodb from "mongodb";
//import * as fs from "fs";

console.log(process.argv[2]);
require("./" + process.argv[2]);
console.log(fs.existsSync("mongo.js"));

var databaseURL: string = "mongodb://localhost:27017/test";
if (process.env.NODE_ENV == "production")
    databaseURL = "mongodb://EIA2Test:EIA2Test1!@ds119368.mlab.com:19368/eia2test";
mongodb.MongoClient.connect(databaseURL, onConnect);
 
var db: mongodb.Db;

function onConnect(_e: mongodb.MongoError, _db: mongodb.Db): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        db = _db;
        //console.log("Connected to: ", _db);
        var collection: mongodb.Collection = _db.collection("students");
        //collection.insertOne({ "name": "Amélie", "job": "Tochter" }, onDone);
        //console.log("Collection: ", collection);
        collection.find({ "name": "Amélie" }).toArray(onFound);
    }
}


function onFound(_e: mongodb.MongoError, _doc: Object[]): void {
    console.log("Found: ", _doc);
    onDone(_e);
}

function onDone(_e: mongodb.MongoError): void {
    console.log("Done! Error: ", _e);
    if (db) {
        db.close();
        db = null;
    }
}

function onCreateCollection(_e: mongodb.MongoError, _collection: mongodb.Collection): void {
    console.log(_e, _collection);
}

//db.students.insert([{'name': 'Max', 'job':'Dog'}])