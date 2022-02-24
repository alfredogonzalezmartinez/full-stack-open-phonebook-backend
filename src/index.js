const express = require("express");
const cors = require("cors");
const { morgan, logFormat } = require("./config/morgan");
const { getAllPersons, getPerson, addPerson } = require("./api");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan(logFormat));
app.use(express.static("build"));

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

const deletePerson = (id) => {
  id = Number(id);
  if (!Number.isNaN(id)) persons = persons.filter((person) => person.id !== id);
};

app.get("/info", (request, response) => {
  response.send(getInfoHtml(persons));
});

app.get("/api/persons", (request, response) => {
  getAllPersons()
    .then((persons) => response.json(persons))
    .catch(() => response.status(500).end);
});

app.get("/api/persons/:id", (request, response) => {
  const { id } = request.params;
  getPerson(id)
    .then((person) =>
      person ? response.json(person) : response.status(404).end()
    )
    .catch((error) => {
      error.name === "CastError"
        ? response.status(400).end()
        : response.status(500).end();
    });
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
  addPerson({ name, number })
    .then((newPerson) => response.json(newPerson))
    .catch(() => response.status(500).end);
});

app.use((request, response, next) => {
  response.status(404).end();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
