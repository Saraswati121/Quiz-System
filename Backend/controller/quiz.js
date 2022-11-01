const Router = require("express")
const quizRoute = Router()
const quizModel= require("../models/quiz")

quizRoute.get('/allquestions',async (req,res)=>{
    const quizData= await quizModel.find();
    res.send({data:quizData});
})

quizRoute.post("/quizQue",async(req,res) => {
    const questions = new quizModel(req.body)
    questions.save()
    res.send('successfully added quiz')
})

module.exports= quizRoute