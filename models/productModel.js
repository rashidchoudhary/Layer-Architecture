import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    date: { type: Date, required: true, default: Date.now},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
});

export default mongoose.model("Product", schema);