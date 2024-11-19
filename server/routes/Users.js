const express = require("express")
const router = express.Router()
const {Users} = require("../models")
const bcrypt = require('bcrypt');

router.post("/",async(req,res) =>{
  
    const {username,password} = req.body
    bcrypt.hash(password,10).then((hash) =>{
        Users.create({
            username:username,
            password:hash
        })
    })
    res.json("Successful")
})

router.post("/login", async(req,res) =>{
    const {username,password} = req.body

    let user = await  Users.findOne({where :{ username : username}})
    if(!user) res.json({error : "user Doesn't exist!!"})

    bcrypt.compare(password, user.password).then((match) =>{
        if(!match) res.json({error :"password isn't matching try again!!"})

        res.json("You Logged In") 
    })
})

module.exports = router