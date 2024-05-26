import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Buffer } from 'buffer';
import  userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-router.js";
import bookingRouter from "./routes/booking-routes.js";
import cors from 'cors';

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.5paopxv.mongodb.net/`)
.then(()=>app.listen(5000, () => 
    console.log("connected successfully")
)
)
    .catch((e) => console.log(e))

//mongodb+srv://admin:<password>@cluster0.5paopxv.mongodb.net/