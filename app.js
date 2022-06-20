require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const mongoPassword = process.env.MONGO_PASSWORD;
mongoose.connect(`mongodb+srv://admin_importlogic:${mongoPassword}@main.uywzg.mongodb.net/toDoListDB`, {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs");
app.use(express.static("public"));


const listItemsSchema = ({
    name: String
})

const item = mongoose.model("item", listItemsSchema);

var newItem = 0;

app.listen(PORT, () => {
    console.log(`working on PORT ${PORT}`);
})

app.get('/', (req, res) => {
    var isEmpty = true;
    item.find((err, toDoList) => {
        if(err) console.log(err);
        else{
            if(toDoList.length > 0) isEmpty = false;
            res.render("index", {
                toDoList,
                newItem,
                isEmpty
                
            });
            newItem = 0;
        }
    })
})

app.post('/', (req, res) => {
    var entry = req.body.newTask;
    if(entry == ""){
        newItem = -1;
    }
    else{
        newItem = 1;
        var newEntry = new item({
            name: entry
        })
        newEntry.save(); 
    }
    res.redirect('/');
})

app.post('/clear', (req, res) => {
    item.deleteMany((err) => {
        if(err) console.log(err);
        else{
            newItem = -2;
            res.redirect('/');
        }
    })

})