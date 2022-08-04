import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  username: { type: String,  trim: true },
  message: { type: String, required: true, trim: true },
  rating: { type: Number, required: true},
})

const ReviewModel = mongoose.model("review", reviewSchema)
export default ReviewModel