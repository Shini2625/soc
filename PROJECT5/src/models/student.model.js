import mongoose from "mongoose";
import {Timestamp} from "mongodb"

const studentschema = mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Password : {
        type: String,
        required: true,
        select: false
    },
    Roll_number:{
        type: String,
        required: true,
        unique: true
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
    }
},{timestamps: true})

export const studentdata = new mongoose.model("Studentdata", studentschema)