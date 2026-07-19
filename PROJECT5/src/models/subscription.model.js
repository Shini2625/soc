import mongoose from "mongoose";
import studentdata from "./student.model.js";

const subschema = new mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "studentdata",
    required: true
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "studentdata",
    required: true
  },
},{timestamps: true});

subscriptionSchema.index({ follower: 1, following: 1 }, { unique: true });

export const subsciptionmodel = new mongoose.model("subscriptionmodel" , subschema)