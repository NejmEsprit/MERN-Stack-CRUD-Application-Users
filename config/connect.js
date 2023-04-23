const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/usersProject')
    .then(
        () => {
            console.log('connected')
        })
    .catch(
        (er) => {
            console.log(er.message)
        })

module.exports=mongoose

