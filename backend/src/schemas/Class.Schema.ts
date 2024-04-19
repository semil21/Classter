import mongoost from "mongoose";

const clasSchema = new mongoost.Schema({
  class: {
    type: String,
  },
  division: {
    type: String,
    default: null,
  },
});

const Class = mongoost.model("Class", clasSchema);
export default Class;
