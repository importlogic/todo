const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs");
app.use(express.static("public"));

var newItem = 0;
var toDoList = [];

app.listen(PORT, () => {
    console.log(`working on PORT ${PORT}`);
})

app.get('/', (req, res) => {
    var isEmpty = true;
    if(toDoList.length > 0) isEmpty = false;
    res.render("index", {
        toDoList,
        newItem,
        isEmpty
        
    });
    newItem = 0;
})

app.post('/', (req, res) => {
    newItem = true;
    var entry = req.body.newTask;
    if(entry == ""){
        newItem = -1;
    }
    else{
        newItem = 1;
        toDoList.push(entry);
    }
    res.redirect('/');
})