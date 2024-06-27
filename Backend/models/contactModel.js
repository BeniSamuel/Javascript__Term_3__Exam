const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  title: String,
  firstName: String,
  lastName: String,
  position: String,
  company: String,
  businessArena: String,
  employees: String,
  street: String,
  additionalInfo: String,
  zipCode: String,
  place: String,
  country: String,
  code: String,
  phoneNumber: String,
  email: String,
  termsAccepted: Boolean
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
