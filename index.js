const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./model");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://ukrmasai10:masai10@cluster0.pndffnb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cors())


app.get("/", async (req, res) => {
    try {
      res.send(`<h3>Hello world its ukrs</h3>`);
    } catch (err) {
      console.log(err);
    }
  });



app.post("/employee", async (req, res) => {  
  try {
    const empdata=await Employee.create(req.body);

    return res.status(200).send({addedemployee:empdata})

  } catch (err) {
    console.log("err in post request", err.message);
  }
});

app.get("/employee", async (req, res) => {  
    try {
      const empdata=await Employee.find({});
  
      return res.status(200).send(empdata)
  
    } catch (err) {
      console.log("err in post request", err.message);
    }
  });

 app.get(`/employee/:id`, async (req, res) => {  
    let id;
    if(req.params.id)
    {
        id=req.params.id
    }
    
    try {    
      const empdata=await Employee.find({id});
  
      return res.status(200).send(empdata[0])
  
    } catch (err) {
      console.log("err in post request", err.message);
    }
  });

  app.patch(`/employee/:id`, async (req, res) => {  
    const {id}=req.params;
    try {    
      const empdata=await Employee.find({id});
      const {_id}=empdata[0];
      const delteddata=await Employee.findByIdAndUpdate(_id,req.body,{new:true});
  
      return res.status(200).send(delteddata)
  
    } catch (err) {
      console.log("err in post request", err.message);
    }
  });

  app.delete(`/employee/:id`, async (req, res) => {  
    const {id}=req.params;
    try {    
      const empdata=await Employee.find({id});
      const {_id}=empdata[0];
      const delteddata=await Employee.findByIdAndDelete(_id);
      return res.status(200).send(delteddata)
  
    } catch (err) {
      console.log("err in post request", err.message);
    }
  });
  




app.listen(8080, (req, res) => {
  console.log("server running on port 8080 by ukr");
});
