"use strict";
// Import HTTP module from node.js
console.log("Startup mongo.js");
const mongodb = require("mongodb");
console.log(process.env.NODE_ENV);
//mongodb.MongoClient.connect("mongodb://localhost:27017/test", onConnect);
mongodb.MongoClient.connect("mongodb://EIA2Test:EIA2Test1!@ds119368.mlab.com:19368/eia2test", onConnect);
var db;
function onConnect(_e, _db) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        db = _db;
        //console.log("Connected to: ", _db);
        var collection = _db.collection("students");
        //collection.insertOne({ "name": "Amélie", "job": "Tochter" }, onDone);
        //console.log("Collection: ", collection);
        collection.find({ "name": "Amélie" }).toArray(onFound);
    }
}
function onFound(_e, _doc) {
    console.log("Found: ", _doc);
    onDone(_e);
}
function onDone(_e) {
    console.log("Done! Error: ", _e);
    if (db) {
        db.close();
        db = null;
    }
}
function onCreateCollection(_e, _collection) {
    console.log(_e, _collection);
}
//db.students.insert([{'name': 'Max', 'job':'Dog'}]) 
//# sourceMappingURL=mongo.js.map