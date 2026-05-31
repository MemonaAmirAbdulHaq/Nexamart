const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URL);

    console.log(
      `MongoDB connected successfully: ${data.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error:", error.message);

    // Retry after 5 seconds
    setTimeout(dbConnection, 5000);
  }
};

module.exports = dbConnection;