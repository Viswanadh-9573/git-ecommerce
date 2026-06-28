const mongoose = require("mongoose");

const connectDatabase = () => {
  // Fix: Force a local fallback URI if process.env.DB_URI is undefined
  const dbUri = process.env.DB_URI || "mongodb://localhost:27017/ecommerce";

  mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;