
const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URl
//`mongodb+srv://uusukko-123:qwerty123@cluster0.34few.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB')
      })
      .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
      })

const personSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    number: {type: String, required: true, unique: true}
  })
personSchema.plugin(uniqueValidator)

const Person = mongoose.model('Person', personSchema)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = Person