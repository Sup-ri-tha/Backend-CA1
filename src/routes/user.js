const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/UserSchema');
const jwt = require('jsonwebtoken');

const route = express.Router();

route.get('/register', (req, res) => {
    const {username, email, password, dob} = req.body;
    if(!username){
        return ("Username cannot be empty");
    }
    if(!email){
        return ("Email cannot be empty");
    }
    if(password.length>16 || password.length<=8)
    {
        return ("Password length should be greater than 8 or less than or equal to 16");
    }
    const hashedpassword = bcrypt.hash(password, 10);
    const user = User.create({username, email, password : hashedpassword, dob});
    res.json(user);
})

route.get('/login', (req, res)=> {
    const username = req.body;
    const user = User.findOne({username}); 
    if(!user)
        return ("User not found");
})