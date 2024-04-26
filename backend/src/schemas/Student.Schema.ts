import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    default: false,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  adhaarNumber: {
    type: Number,
  },
  brthCertiNum: {
    type: String, // Birth Certificate
  },
  previousSchool: {
    type: String,
    default: false,
  },
  bloodGroup: {
    type: String,
  },
  previoudID: {
    type: String,
  },
  anyDisease: {
    type: String,
  },
  anyNotes: {
    type: String,
  },
  class: {
    type: String,
    default: 0,
  },
  division: {
    type: String,
    default: 0,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
