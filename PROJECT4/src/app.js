import dotenv from 'dotenv';
dotenv.config() 
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/health', (req, res)=>{

})

app.post('/student', (req, res)=>{
    
})