const express = require("express")
const router = express.Router()
const {Posts} = require("../models")

// crud and rest api
router.get("/", async(req,res) =>{
    const listOfAllPost = await Posts.findAll()
    res.json(listOfAllPost)
})

router.post("/", async (req,res)=>{
    const post = req.body
    await Posts.create(post)
    res.json(post)
})

module.exports = router