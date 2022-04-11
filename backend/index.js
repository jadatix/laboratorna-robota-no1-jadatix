//To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cluster0.unrx3.mongodb.net/myFirstDatabase', {
    dbName: 'data',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
    console.log('Connected to yourDB-name database'));

// Schema 
const DataSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    troops: {
        type: String,
        required: true,
        unique: true,
    },
    tanks: {
        type: String,
        required: true,
    },
    art: {
        type: String,
        required: true,
    },
    other: {
        type: String,
        required: true,
    }
});


const Data = mongoose.model('data', DataSchema);
Data.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000"); 
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000

    // If you see App is working means
    // backend working properly
});

app.post("/register", async (req, resp) => {
    try {
        const data = new Data(req.body);
        let result = await data.save();
        result = result.toObject();
        if (result) {
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("data already exists");
        }

    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.listen(5000);