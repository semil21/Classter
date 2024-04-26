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
  fatherAltContact: {
    type: Number,
    default: 0,
  },
  fatherProfession: {
    type: String,
  },
  fatherIncome: {
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
  motherAltContact: {
    type: Number,
    default: 0,
  },
  motherProfession: {
    type: String,
  },
  motherIncome: {
    type: String,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    default: null,
  },
});

const Parent = mongoose.model("Parent", parentsSchema);
export default Parent;
