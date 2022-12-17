const mongoose  = require("mongoose");


//schema
const EmploydetailsSchema=mongoose.Schema({ 
    "id":Number,  
    "employee_name": String,
    "employee_id": String,
    "title": String,
    "salary": Number,
    "image": String,
    "username": String,
    "password": String,
    "tasks": Array,
    "status": String,
    "team": String,
})
//model
const Employee= mongoose.model("Employeename",EmploydetailsSchema);//filename, schema


module.exports=Employee;