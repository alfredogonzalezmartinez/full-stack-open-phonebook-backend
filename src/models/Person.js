const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const personSchema = new Schema({
  name: {
    type: String, minlength: 3, required: true, unique: true,
  },
  number: { type: String, minlength: 8, required: true },
});

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
  transform: (document, object) => {
    const returnedObject = object;
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    return returnedObject;
  },
});

const Person = model('Person', personSchema);

module.exports = Person;
