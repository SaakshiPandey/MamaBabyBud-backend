const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },

  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },

  phone: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return /^[6-9]\d{9}$/.test(value);
      },
      message: "Phone number must be a valid 10-digit number."
    }
  },

  password: { 
    type: String, 
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);