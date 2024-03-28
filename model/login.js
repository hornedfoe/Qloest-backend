const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    phonenumber: { type: Number }
});

module.exports = model("User", userSchema);
