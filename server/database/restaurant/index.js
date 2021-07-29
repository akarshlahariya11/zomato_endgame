import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    mapLocation: {type: string, required: true },
    cuisine: [String],
    restaurantTimings: String,
    contactNumber: Number,
    website: Number,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref: "Menus",
    }, 
    reviews: [{ type: mongoose.Types.ObjectId,   //Restaurant Review
        ref: "Reviews" }],
    photos: { type: mongoose.Types.ObjectId,
        ref: "Images" }
},
{
    timestamps: true,
}
);

export const RestaurantModel = mongoose.model("Restaurants", ImageSchema);