const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.db_url);
            console.log("Database connected successfully");
    }
    catch(error){
        console.log("Error in connecting to database");
    }
}

module.exports = connectDB;