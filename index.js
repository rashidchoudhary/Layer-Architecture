import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import commentRouter from "./routes/commentRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/comment", commentRouter);

const connection = mongoose.connection;
connection.once("connected", () => console.log("Database has connected..."));
connection.on("error", (error) => console.log("Database connection error:", error));
mongoose.connect(process.env.MONGO_URI);

app.listen(process.env.PORT, () => console.log("Server has started..."));