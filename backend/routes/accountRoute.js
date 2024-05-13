const { model } = require('mongoose');
// const loginSchema = require('../models/loginSchema')
const signupSchema = require('../models/signupSchema')
const express = require('express');
const router = express.Router();

router.post("/login", async (req, res) => {
    console.log("login called ");
    const { email, password } = req.body;

    const lSchema = await signupSchema.find({ email: email, password: password });
    if (lSchema.length != 0) {
        console.log("sended successfully.. ");
        res.status(200).json(lSchema);
    }
    else {
        console.log("Invaild user ")
        res.status(400).json({ problem: "Invalid user" });
    }
    // 2 things 
    // check user exist or not 
    // 1 if yes then return user 
    // 2 if no then return 400.json(problem);

    
})
router.post("/signup", async (req, res) => {
    console.log("Signup called");
    const { email, name, password, confirm_password } = req.body;
    if (password != confirm_password) {
        // console.log("error in one ");
        // console.log(password);
        // console.log(confirm_password);
        res.status(400).json({ problem: "password not matches.." });
    }
    else {
        let user = await signupSchema.find({ email: email });
        if (user.length != 0) {
            console.log(user);
            // console.log("error in two");
            res.status(400).json({ problem: "user alredy exists.." })
        }
        else {
            const user = await signupSchema.create({ name: name, email: email, password: password, confirm_password: confirm_password });
            // console.log(user);
            console.log("error in Three");
            res.status(200).json({ user });
        }
    }
    //User check 
    //1 checking password matches or not if not then res.status(400).json({ problem: "password not matches.." });
    //2 checks that if already exsits in our databse then es.status(400).json({ problem: "user alredy exists.." });
    // checks if two checks are false then return the user create and in respoce the user with status code 200 

})

module.exports = router;

//task
//signup kro and login pe find kro ki user hai ki nahi
