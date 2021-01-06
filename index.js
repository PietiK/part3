require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  if(error.name === 'ValidationError') {
    return response.status(500).send({error: 'Name and number must be unique'})
  }
  next(error)
}

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :response-time ms - :body '))

  app.get('/', (req, res) => {
    res.send("Etusivu")
  })

app.get('/api/persons', (request, response, next) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
  .catch(error => next(error))
})

app.get('/info', (req, res) => {
  const total = 0
  Person.find({}).then(result => {
    result.reduce(total => {total + 1})
  })
  res.send(`<div>
  <p>The phonebook has info for ${total} people </p>
  ${Date()}
  </div>`
  )
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
  .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  if(!body.name || !body.number){
    return response.status(400).json({
      error: 'Information missing'
    })
  }
  const person = new Person({
    name: body.name,
    number: body.number
  })
  morgan.token('person', function (request, result) {return request.headers[request.body]})

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
  .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)