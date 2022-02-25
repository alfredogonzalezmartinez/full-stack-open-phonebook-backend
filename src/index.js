const express = require('express');
const cors = require('cors');
const { morgan, logFormat } = require('./config/morgan');

const {
  getAllPersons,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
  getInfo,
} = require('./api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan(logFormat));
app.use(express.static('build'));

app.get('/info', (request, response, next) => {
  getInfo()
    .then((info) => response.send(info))
    .catch(next);
});

app.get('/api/persons', (request, response, next) => {
  getAllPersons()
    .then((persons) => response.json(persons))
    .catch(next);
});

app.get('/api/persons/:id', (request, response, next) => {
  const { id } = request.params;
  getPerson(id)
    .then((person) => (person ? response.json(person) : next()))
    .catch(next);
});

app.delete('/api/persons/:id', (request, response, next) => {
  const { id } = request.params;
  deletePerson(id)
    .then(() => response.status(204).end())
    .catch(next);
});

app.post('/api/persons', (request, response, next) => {
  const { name, number } = request.body;
  addPerson({ name, number })
    .then((newPerson) => response.json(newPerson))
    .catch(next);
});

app.put('/api/persons/:id', (request, response, next) => {
  const { id } = request.params;
  const { name, number } = request.body;
  updatePerson({ id, name, number })
    .then((updatedPerson) => response.json(updatedPerson))
    .catch(next);
});

app.use((request, response) => {
  response.status(404).end();
});

app.use((error, request, response) => {
  console.error(error);
  if (error.name === 'CastError') { return response.status(400).json({ error: 'malformatted id' }); }
  if (error.name === 'ValidationError') { return response.status(400).json({ error: error.message }); }
  return response.status(500).end();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
