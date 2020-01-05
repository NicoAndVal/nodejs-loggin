const moongose = require('mongoose')
const {mongodb} = require('./keys')

moongose.connect(mongodb.URI,{useUnifiedTopology: true,useNewUrlParser: true })
    .then(db => console.log('DATABASE IS CONNECTED'))
    .catch(err => console.error(err))