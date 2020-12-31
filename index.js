const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :response-time ms - :body '))

let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
      id: 4,
      name: "Mary Poppendick",
      number: "39-23-6423-122"
    },
  ]

  app.get('/', (req, res) => {
    res.send("Roni Kolari on kakkapylly")
  })

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send(`<div>
  <p>The phonebook has info for ${persons.length} people </p>
  ${Date()}
  </div>`
  )
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  if(!body.name || !body.number){
    return response.status(400).json({
      error: 'Information missing'
    })
  }
  const kopiot = persons.filter(person => person.name.toLowerCase() === body.name.toLowerCase())
  if(kopiot.length > 0){
    return response.status(400).json({
      error: 'Name must be unique'
    })
  }
  const person = {
    id: Math.floor(Math.random() * Math.floor(1000)),
    name: body.name,
    number: body.number
  }
  morgan.token('person', function (request, result) {return request.headers[request.body]})
  persons = persons.concat(person)

  response.json(body)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})


const port = process.env.PORT || 3001
app.listen(port)
console.log(`Server running on port ${port}`)