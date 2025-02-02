import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    date: { type: Date, required: true, default: Date.now},
});

export default mongoose.model("User", schema);