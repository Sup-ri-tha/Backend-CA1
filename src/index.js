const express = require('express');
const connectDB = require('./config/db')
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = 3000;

connectDB();

app.get('/', (req,res) => {
    console.log("Hello World");
});

app.post('/', (req, res) =>{
    console.log("Hello World");
})

app.listen(PORT, (req,res)=>{
    console.log(`The server is running on port ${PORT}`);
})