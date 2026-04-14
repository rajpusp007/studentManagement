require('dotenv').config();
const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const courseItem = require('./models/courseItem')
const PORT = process.env.PORT || 3400;
app.get("/", (req, resp) => {
  resp.send('Welcome to School management System');
});
// Import the router files
//const personRoutes = require('./routes/personRoutes');
const courseRoutes = require('./routes/courseRoutes');

// Use the routers

//app.use('/person', personRoutes);
app.use('/courseItem', courseRoutes);

app.listen(PORT, ()=>{
  console.log('Listening on port 3400');
})

///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);
//const courseRoutes = require('./routes/courseRoutes');
app.use('/courseItem',courseRoutes);

// app.listen(3400, () => {
//   console.log("server is running on 3400");
// });
