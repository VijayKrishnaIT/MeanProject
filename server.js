//import express module
//express module used to collabrate the modules (custom modules)
let express = require("express");

//create the master object by using express module
//master object used to collabrate the modules
//where "app" is the master object
let app = express();


//import body-parser module
//body-parser module used to accept the data from client application
let bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


//enable the ports communication
let cors = require("cors");
app.use(cors());


app.use("/fetch",require("./employee/getAllEmployees"));
app.use("/insert",require("./addEmployee/addEmployee"));
app.use("/update",require("./updateEmployee/updateEmployee"));
app.use("/delete",require("./deleteEmployee/deleteEmployee"));


let port = process.env.PORT || 8080;
console.log(process.env.PORT);
//assign the port no
app.listen(port);
console.log(`server listening the port no.${port}`);
