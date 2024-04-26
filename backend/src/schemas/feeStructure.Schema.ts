import mongoose from "mongoose";

const feesSchema = new mongoose.Schema({
  class: {
    type: String,
  },
  quaterlyAmount: {
    type: Number,
  },
  yearlyAmount: {
    type: Number,
  },
  registrationFee: {
    type: Number,
  },
  transportFee: {
    type: Number,
  },
  booksFee: {
    type: Number,
  },
  labFee: {
    type: Number,
  },
  activityFee: {
    type: Number,
  },
});

const Fee = mongoose.model("Fee", feesSchema);
export default Fee;
