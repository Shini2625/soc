import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const coninst = await mongoose.connect(`${process.env.MONGODB_URL}`)
      console.log(`MongoDB connected successfully`);
      console.log(`using database ${process.env.DB_NAME}`);
      
    } catch (error) {
        console.error("MongoDB connection failed:", error.message)
    }
}

export default connectDB