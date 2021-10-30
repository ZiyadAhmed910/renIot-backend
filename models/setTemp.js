const mongoose = require("mongoose");

const setTempSchema = new mongoose.Schema({
  setTemp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SetTemp", setTempSchema);
