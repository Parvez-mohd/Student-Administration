const express = require("express");
const Student = require("../mongo/student");
const router = express.Router();



router.post("/add",async(req,res)=>{
const {name, roll, sub, marks, sem} = req.body;

if(!name || !roll || !sub || !marks || !sem) return res.status(422).json({Error:"please enter all the fields!"})

let checkConstraint = await Student.find({"name":name
, "subject":sub,"rollno":roll, "semester":sem
},{_id:1})
if(checkConstraint.length!==0) {
    let old = checkConstraint[0];         //updating..

    await Student.findByIdAndUpdate(
   {_id:old._id} ,{
    $set:{
        marks:marks
    }
}
);
res.status(200).json({message:"Updated successfully!"});   //updated..
    }
    else {
const student = new Student({
    name, rollno:roll, semester:sem, subject:sub, marks
})
await student.save();
res.status(200).json({message:"added successfully!"});
    }
})


router.post("/search",async (req,res)=>{
    const {name, roll} = req.body;
    if(!roll || !name) return res.status(422).json({Error:"please enter all the fields!"})
    let present = await Student.find({"rollno":roll,"name":name})
    if(present.length==0){
     return res.status(422).send({Error:"Your Data is not Present"})
    }
    res.status(200).json({present})
})





router.get("/visualize",async (req,res)=>{
    let data = await Student.find()
    if(data.length===0) return res.status(422).json({Error:"No Student's data is present"})
    res.status(200).json(data)
})



module.exports = router;