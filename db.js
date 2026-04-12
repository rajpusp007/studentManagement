const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/college';

const connectDB = async ()=>{
  try{
    await mongoose.connect(mongoURL);
    console.log('connected to mongoDB');
    
  } catch(err){
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
connectDB();

const db = mongoose.connection;

db.on('connected',()=>{
  console.log('connected to MongoDb server');
  
})
db.on('error',(err)=>{console.error('MongoDB connection error:', err);
});
db.on('disconnected',()=>{
  console.log('MongoDB disconnected');
  
});

module.exports = db;