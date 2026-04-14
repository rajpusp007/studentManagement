const express = require('express');
const app = express();
const router = express.Router();
const courseItem = require('../models/courseItem');
//
router.post("/", async (req, resp) => {
  try {
    const data = req.body;

    // create a new Person document using the Mongoose model
    const newCourse = new courseItem(data);

    const response = await newCourse.save();
    console.log("data saved");
    resp.status(200).json(response);
  } catch (err) {
    console.log(err);
    resp.status(500).json({ error: "Internal Server Error" });
  }
});
// GET method to get the person
router.get("/", async (req, resp) => {
  try {
    const data = await courseItem.find();
    console.log("data fetched");
    resp.status(200).json(data);
  } catch (err) {
    console.log(err);
    resp.status(500).json({ error: "Internal Server Error" });
  }
});
///////////////////////////////////////////////////////////
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

module.exports = router;