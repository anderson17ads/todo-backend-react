const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect(
    'mongodb://localhost/todo',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)