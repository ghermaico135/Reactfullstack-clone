const express = require("express")
const app = express()
const cors = require('cors');

// to make all the output json
app.use(express.json())

// cross origin resource sharing
app.use(cors())
// database
const db = require("./models")

// Routers
const postRouter = require("./routes/Posts")
app.use("/posts",postRouter)

// Comment
const commentRouter =  require("./routes/Comments")
app.use("/comments",commentRouter )

// user registeration
const usersRouter = require("./routes/Users")
app.use("/auth",usersRouter)


db.sequelize.sync().then(()=>{
    app.listen( 3001,()=>{
        console.log("app listening at 3001")
    })
})

