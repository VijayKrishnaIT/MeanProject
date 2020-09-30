//import mongodb module
let mongodb = require("mongodb");

//mongodb follows the client server architecture
//we need to create the client
let sambaIT = mongodb.MongoClient;

//let url = "mongodb+srv://admin:admin@meanprojectdb.nzphu.mongodb.net/<dbname>?retryWrites=true&w=majority";
let url =
  "mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/meanprojectdb?retryWrites=true&w=majority" ||
  "mongodb://localhost:27017/meanprojectdb";

//"mongodb://localhost:27017/meanprojectdb";

//create the module(custom module)
let employees = require("express")
  .Router()
  .get("/", (req, res) => {
    sambaIT.connect(url, (err, client) => {
      if (err) throw err;
      else {
        let db = client.db("meanprojectdb");
        db.collection("employees")
          .find()
          .toArray((err, array) => {
            if (err) throw err;
            else {
              res.send(array);
            }
          });
      }
    });
  });

//export the module
module.exports = employees;
