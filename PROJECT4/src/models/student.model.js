import mongoose from "mongoose";
import {Timestamp} from "mongodb"

const studentschema = mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Roll_number:{
        type: String,
        required: true,
        unique: [true, "this roll number is already in use/doesnt exist"]
    },
    Branch: {
        type: String,
        required: true
    },
    Semester: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
},{timestamps: true})

export const studentdata = new mongoose.model("Studentdata", studentschema)