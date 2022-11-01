const mongoose = require('mongoose')

const QuizSchema = mongoose.Schema({
    defecultLabel : Number,
    QuizQuestion : String,
    QuizOpt_1:String,
    QuizOpt_2:String,
    QuizOpt_3:String,
    QuizOpt_4:String,
    CorrectAnswer : String,
})

const QuizModel = mongoose.model('quiz',QuizSchema)

module.exports= QuizModel