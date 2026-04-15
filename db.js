const mongoose = require("mongoose");
require("dotenv").config();
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
//Define the MongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/college';

 //const mongoURL = 'mongodb+srv://pusprajtws_db_user:Chhoti281219@cluster0.ibgc0pc.mongodb.net/college';
const mongoURL = process.env.MONGODB_URL_LOCAL;
console.log("ENV VALUE:", process.env.MONGODB_URL);
const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGODB_URL;
    //const mongoURL = process.env.MONGODB_URL_LOCAL;
    if (!mongoURL) {
      throw new Error("MONGODB_URL is missing in .env");
    }
    await mongoose.connect(mongoURL);
    console.log("connected to mongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
connectDB();

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to MongoDb server");
});
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = db;
