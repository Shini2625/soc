import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import mongoose from 'mongoose';
import connectDB from './db/index.js';
import app from './app.js';

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000 , ()=> {
        console.log(`port ${process.env.PORT}`)
    })
})
.catch((err)=> {
    console.log("db con fail");
    
})

