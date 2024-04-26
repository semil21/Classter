import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
  aadharNumber: {
    type: Number,
  },
  contact: {
    type: Number,
  },
  altenateContact: {
    type: Number,
  },
  bloodGroup: {
    type: String,
  },
  anyDisease: {
    type: String,
  },
  address: {
    type: String,
  },
  education: {
    type: String,
  },
  experience: {
    type: String,
  },
  joiningDate: {
    type: String,
  },
  lastWorkingDay: {
    type: String,
    default: false,
  },
  monthlySalary: {
    type: String,
  },
  nationality: {
    type: String,
  },
  emergencyName: {
    type: String,
  },
  emergencyContact: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  classAssigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    default: null,
  },
});

const teacher = mongoose.model("teacher", teacherSchema);

export default teacher;
