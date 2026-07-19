import mongoose from "mongoose";
import {Timestamp} from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const studentschema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Password : {
        type: String,
        required: true,
        select: false,
        unique: true
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

//password hashing
studentschema.pre('save', async function() {
  if (!this.isModified('Password')) {
    return;
  }
  this.Password = await bcrypt.hash(this.Password, 10);
});

//

studentschema.methods.generateAccessToken = function() {
  return jwt.sign(
    { id: this._id, email: this.Email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

studentschema.methods.generateRefreshToken = function() {
  return jwt.sign(
    { id: this._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const studentdata = new mongoose.model("Studentdata", studentschema)