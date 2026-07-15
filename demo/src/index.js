//require ('dotenv').config({path: './.env'})

import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';

// second approach
connectDB()

// first approach
/*
import express from "express"
const app= express()

( async ()=>{
    try{
        await mongoose.connect(`$(process.env.MONGODB_URL)/${DB_NAME}`)
        app.on("error",(error)=> {
            console.log("ERR: ", error)
        })
        app.listen(process.env.PORT , ()=> {
            console.log(`App is listening on ${process.env.PORT}`)
        })
    } catch (error){
        console.error("ERROR: ", error)
        throw error
    }
})()
*/