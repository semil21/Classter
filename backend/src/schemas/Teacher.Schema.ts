import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    type: Number,
  },
  role: {
    type: String, // principal | management | teacher  | accountant | other
  },
  joiningDate: {
    type: String,
  },
  monthlySalary: {
    type: String,
  },
  gender: {
    type: String,
  },
  experience: {
    type: String,
  },
  nationality: {
    type: String,
  },
  email: {
    type: String,
  },
  education: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  address: {
    type: String,
  },
  emergencyName: {
    type: String,
  },
  emergencyRelation: {
    type: String,
  },
  emergencyContact: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const teacher = mongoose.model("teacher", teacherSchema);

export default teacher;
