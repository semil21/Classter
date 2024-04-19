import mongoose from "mongoose";

const parentsSchema = new mongoose.Schema({
  fatherName: {
    type: String,
  },
  fatherEducation: {
    type: String,
  },
  fatherContact: {
    type: Number,
  },
  fatherProfession: {
    type: String,
  },
  fathericome: {
    type: String,
  },
  motherName: {
    type: String,
  },
  motherEducation: {
    type: String,
  },
  motherContact: {
    type: Number,
  },
  motherProfession: {
    type: String,
  },
  mothericome: {
    type: String,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

const Parent = mongoose.model("Parent", parentsSchema);
export default Parent;
