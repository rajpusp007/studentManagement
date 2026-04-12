// app.get('/',(req,resp)=>{
//   resp.send("hello Mr Puspraj");
// });
// app.get('/home',(req,resp)=>{
//   let myDetail={
//     name: "puspraj",
//     age: 42,
//     email: "rajpusp007@gamil.com"
//   }
//   resp.send(myDetail);
// })
// app.listen(3400, ()=>{
//   console.log("You are using server 3400");
// });

// app.get("/", (req, resp) => {
//   let myDetail = {
//     name: "alice",
//     age: 25,
//     hobbies: ["reading", "Painting"],
//   };
//   resp.send(myDetail.name);
// });
// app.listen(3400, () => {
//   console.log("You are using server 3400");
// });
// const objectToConvert = {"name": "Bob", "age": 30};
// const jsonString = JSON.stringify(objectToConvert);
// console.log(jsonString);
const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", (req, resp) => {
  const weatherData = {
    temperature: 24,
    conditions: "rainy",
    city: "Dehradun",
  };
  resp.json(weatherData);
});

///////////////////////////////////////////////////////////////
app.post("/courseItems", async (req, resp) => {
  try {
    const data = req.body;

    // create a new Person document using the Mongoose model
    const newCourse = new courseItem(data);

    const response = await newCourse.save();
    console.log("data saved");
    resp.status(200).json(response);
  } 
  
  catch(err) {
    console.log(err);
    resp.status(500).json({error: 'Internal Server Error'});

  }
});

//////////////////////////////////////////////////////////////
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

app.listen(3400, () => {
  console.log("server is running on 3400");
});
