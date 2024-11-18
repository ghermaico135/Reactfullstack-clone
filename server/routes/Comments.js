const express = require("express")
const router = express.Router();
const {Comments} = require("../models")

router.get("/:PostId", async(req,res) =>{
    const PostId = req.params.PostId;
    const comment = await Comments.findAll({where:{PostId : PostId} })
    res.json(comment)
})

router.post("/", async(req,res) =>{
    const comment = req.body
    await Comments.create(comment)
    res.json(comment)
})

module.exports = router