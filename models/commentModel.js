import mongoose from "mongoose";

const schema = mongoose.Schema({
    text: { type: String, required: true},
    date: { type: Date, required: true, default: Date.now},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product"},
});

export default mongoose.model("Comment", schema);