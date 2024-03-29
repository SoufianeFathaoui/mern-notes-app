import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  userId:{
    type:String,
    required:[true,"Please provide a user id"]
  },
  title:{
    type:String,
    required:[true,"Please provide a title"],
    maxlength:[40,"title cannot be more than 40 characters"],
  },
  description:{
    type:String,
    required:true,
    maxlength:[200,"Description cannot be more than 200 characters"],
  },
  color:{
    type:String,
    default:"#ffffff"
  },
},
  {
    timestamps:true,
  }
)
export default mongoose.model("Note",noteSchema)