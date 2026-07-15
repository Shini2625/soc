import mongoose from "mongoose";
import { DB_NAME } from "../.env";

const connectDB = async () => {
    try {
      const coninst = await mongoose.connect(`${process.env.MONGODB_URL}`)
      console.log(`MongoDB connected successfully`);
      console.log(`using database ${DB_NAME}`);
      
    } catch (error) {
        console.error("MongoDB connection failed:", error.message)
        process.exit(1)
    }
}

export default connectDB