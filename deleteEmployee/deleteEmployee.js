let mongodb = require("mongodb");
let sambaIT = mongodb.MongoClient;
// let url = process.env.MONGO_URI || "mongodb://localhost:27017/meanprojectdb";
let url =
  "mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/meanprojectdb?retryWrites=true&w=majority" ||
  "mongodb://localhost:27017/meanprojectdb";
let deleteEmployee = require("express")
  .Router()
  .delete("/", (req, res) => {
    sambaIT.connect(url, (err, client) => {
      if (err) throw err;
      else {
        let db = client.db("meanprojectdb");
        db.collection("employees").deleteOne(
          { empId: req.body.empId },
          (err, result) => {
            if (err) throw err;
            else {
              res.send({ delete: "success" });
            }
          }
        );
      }
    });
  });
module.exports = deleteEmployee;
