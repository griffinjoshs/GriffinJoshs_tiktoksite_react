const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    subject: { type: String, required: false },
    message: { type: String, required: false }
});

module.exports.Email = mongoose.model('Email', emailSchema)