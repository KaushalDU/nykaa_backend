const express = require("express")
const cors = require("cors")
const connection = require("./db")
const { userRouter } = require("./routes/user.routes")
const { postRouter } = require("./routes/post.router")


const app = express()
app.use(
  cors({
    origin:true,
    credentials: true,
  })
);

app.use(express.json)

app.use("/users",userRouter)
app.use("/posts",postRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to db")
        console.log("Server is running at port 8080");
    }catch(err){
         console.log(err);
    }
    
})