import mongoose from "mongoose";
import {Timestamp} from "mongodb"
import bcrypt from "bcrypt"

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

studentschema.pre('save', async function(next) {
  if (!this.isModified('Password')) {
    return next();
  }
  this.Password = await bcrypt.hash(this.Password, 10);
  next();
});

export const studentdata = new mongoose.model("Studentdata", studentschema)