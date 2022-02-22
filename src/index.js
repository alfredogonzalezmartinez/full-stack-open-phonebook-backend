const express = require("express");
const { morgan, logFormat } = require("./config/morgan");

const app = express();

app.use(express.json());
app.use(morgan(logFormat));

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

const getInfoHtml = (persons) => {
  const amauntPeople = persons.length;
  const date = new Date().toString();
  return `<p>Phonebook has info for ${amauntPeople} people<p/><p>${date}<p/>`;
};

const getPerson = (id) => {
  id = Number(id);
  if (Number.isNaN(id)) return undefined;
  return persons.find((person) => person.id === id);
};

const deletePerson = (id) => {
  id = Number(id);
  if (!Number.isNaN(id)) persons = persons.filter((person) => person.id !== id);
};

const getRandomId = () => Math.ceil(Math.random() * 1_000_000);

const addPerson = ({ name, number }) => {
  let id = getRandomId();
  while (persons.some((person) => person.id === id)) id = getRandomId();
  const newPerson = { name, number, id };
  persons.push(newPerson);
  return newPerson;
};

app.get("/info", (request, response) => {
  response.send(getInfoHtml(persons));
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = getPerson(id);
  if (!person) return response.status(404).end();
  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  deletePerson(id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const { name, number } = request.body;
  if (!name) return response.status(400).json({ error: "name is required" });
  if (!number)
    return response.status(400).json({ error: "number is required" });
  if (persons.some((person) => person.name === name))
    return response.status(400).json({ error: "name must be unique" });
  const newPerson = addPerson({ name, number });
  response.json(newPerson);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
