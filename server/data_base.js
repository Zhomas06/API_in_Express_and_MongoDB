
const mongoose = require('mongoose');
const { Server_URL } = require('./config');
const connect = async () => {
  try {
      console.log(Server_URL)
    await mongoose.connect(Server_URL);
    console.log("Mongoose connected");
  } catch (e) {
    console.error(`Couldn't connect to MongoDB with Mongoose: ${e}`);
  }
}

module.exports = {
  connect,
}