require("../config/mongoose");

const Person = require("../models/Person");

const getAllPersons = () => Person.find({});

const getPerson = (id) => Person.findById(id);

const addPerson = ({ name, number }) => {
  const person = new Person({ name, number });
  return person.save();
};

module.exports = {
  getAllPersons,
  getPerson,
  addPerson,
};
