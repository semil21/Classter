import mongoose, { Schema } from "mongoose";

const clasSchema = new mongoose.Schema({
  class: {
    type: String,
  },
  division: {
    type: String,
    default: null,
  },
});

const Class = mongoose.model("Class", clasSchema);
export default Class;
