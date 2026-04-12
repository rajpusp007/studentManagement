const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, resp) => {
  try {
    const data = req.body;

    // create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    const response = await newPerson.save();
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
    const data = await Person.find();
    console.log("data fetched");
    resp.status(200).json(data);
  } catch (err) {
    console.log(err);
    resp.status(500).json({ error: "Internal Server Error" });
  }
});
// GET method to get the person
router.get("/courseItems", async (req, resp) => {
  try {
    const data = await courseItem.find();
    console.log("data fetched");
    resp.status(200).json(data);
  } catch (err) {
    console.log(err);
    resp.status(500).json({ error: "Internal Server Error" });
  }
});
// Get method from workType
router.get("/:workType", async (req, resp) => {
  try {
    const workType = req.params.workType; // extract the work type from the URL parameter

    if (
      workType == "teacher" ||
      workType == "manager" ||
      workType == "peon" ||
      workType == "staff" ||
      workType == "clerk"
    ) {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      resp.status(200).json(response);
    } else {
      resp.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    resp.status(500).json({ error: "Internal Server Error" });
  }
});
router.put("/:id", async (req, resp) => {
  try {
    const personId = req.params.id; // extract the id from the URL parameter
    const updatePersonData = req.body; // update data for the person

    const response = await Person.findByIdAndUpdate( 
      personId,
      updatePersonData,
      {
        returnDocument: "after", // ✅ updated option
        runValidators: true,
      })

    if (!response) {
      return resp.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    resp.status(200).json(response);
  } catch (err) {
    console.log(err);
    resp.status(500).json({ error: "Internal Server Error" });
  }
  
});

router.delete('/:id', async (req, resp)=>{
  try{
  const personId = req. params.id; // extract the person's ID from the URL parameter
  // assuming you have a Person model
  const response = await Person.findByIdAndDelete(personId);
  if(!response){
    return resp.status(404).json({error: 'Person not found'});
  }
  console.log('data delete');
  resp.status(200).json({message: 'person Deleted Successfully'});
  }catch(err){
    console.log(err);
    resp.status(500).json({ error: "Internal Server Error" });
  }
  
})
module.exports = router;
