import mongoose from "mongoose";

const MarketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // location: {
  //   street: { type: String, required: true },
  //   number: { type: Number, required: true },
  //   district: { type: String, required: true },
  //   zip: { type: Number, required: true },
  //   country: { type: String, required: true },
  //   city: { type: String, required: true },
  //   state: { type: String, required: true }
  // },
  description: String,
  phone: { type: Number, required: true }
});

export default mongoose.model("Market", MarketSchema);
