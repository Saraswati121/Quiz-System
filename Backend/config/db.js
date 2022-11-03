const mongoose = require('mongoose')

module.exports = () => {
    return mongoose.connect("mongodb+srv://digiaccel12:digiaccel12@cluster0.akpkmeq.mongodb.net/?retryWrites=true&w=majority")
}