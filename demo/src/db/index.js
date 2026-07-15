import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
      const coninst = await mongoose.connect(`${process.env.MONGODB_URL}`)
      console.log(`mongo connected || variable consists of ${coninst}`);
      
    } catch (error) {
        console.error("MongoDB connection failed:", error.message)
        process.exit(1)
    }
}

export default connectDB