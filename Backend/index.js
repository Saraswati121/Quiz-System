const express = require('express');
const connect = require("./config/db")
const authentication = require("./controller/auth")
const quizRouter = require("./controller/quiz");
const app = express();
const cors= require('cors')

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

app.use("/auth",authentication)
app.use("/quiz",quizRouter)

const port = process.env.PORT || 8080;

app.listen(port,async()=>{
    await connect();
    console.log('listening on port 8080');
})