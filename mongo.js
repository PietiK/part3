const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://uusukko-123:${password}@cluster0.34few.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
})

if (process.argv.length === 5) {
        person.save().then(response => {
        console.log(`Added ${person.name} number ${person.number} to phonebook!`)
        mongoose.connection.close()
    })
}
if (process.argv.length === 3) {
    console.log("Puhelinluettelo:")
    Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person)
        })
      mongoose.connection.close()
    })
}
if (process.argv.length < 2 || process.argv.length > 5) {
    console.log("Annetuissa tiedoissa jokin virhe")
    process.exit(1)
}