const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
name: {
type: String,
required: true
},
rollno:{
    type:String,
    required:true
},
semester:{
type:String,
required:true
},
subject:{
    type:String,
    required:true
},
marks:{
    type:Number,
    required:true
}

});
module.exports = mongoose.model("Student", UserSchema);