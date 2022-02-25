require('../config/mongoose');

const Person = require('../models/Person');

const getAllPersons = () => Person.find({});

const getPerson = (id) => Person.findById(id);

const addPerson = ({ name, number }) => {
  const person = new Person({ name, number });
  return person.save();
};

const updatePerson = ({ id, name, number }) => Person.findByIdAndUpdate(
  id,
  { name, number },
  { new: true, runValidators: true },
);

const deletePerson = (id) => Person.findByIdAndRemove(id);

const getInfo = () => getAllPersons().then((people) => {
  const amauntPeople = people.length;
  const date = new Date().toString();
  return `<p>Phonebook has info for ${amauntPeople} people<p/><p>${date}<p/>`;
});

module.exports = {
  getAllPersons,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
  getInfo,
};
