// api/tests/setup.js

// Import necessary modules
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

// Set up MongoDB test server
const mongoServer = new MongoMemoryServer();

module.exports.setupTestEnvironment = async () => {
  // Configure mongoose to use the in-memory database
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports.teardownTestEnvironment = async () => {
  // Disconnect mongoose and stop the MongoDB test server
  await mongoose.disconnect();
  await mongoServer.stop();
};
