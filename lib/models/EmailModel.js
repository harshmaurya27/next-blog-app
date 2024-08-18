import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const EmialModel = mongoose.models.email || mongoose.model("email", Schema);

export default EmialModel;
