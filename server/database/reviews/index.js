import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    restaurnat: { type: mongoose.Types.ObjectId, ref: "Restaurants" },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    rating: { type: Number, required: true },
    reviewText: { type: String },
    photos: [{
        type: mongoose.Types.ObjectId,
        ref: "Images", 
    }],
  },
    {
        timestamps: true,
    }
);


export const ReviewModel = mongoose.model("Reviews", ReviewSchema);