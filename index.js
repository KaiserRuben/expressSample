const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let myToDos = []
let myDoneToDos = []
let body = {
    "myToDos": myToDos,
    "myDoneToDos": myDoneToDos

}

app.post('/', function (req, res) {
    body = req.body
    res.status(201).send("saved")
})

app.get('/', function (req, res) {
    res.status(200).json(body)
})

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
});