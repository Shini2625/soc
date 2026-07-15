import dotenv from 'dotenv';
dotenv.config() 
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/health', (req, res)=>{
  res.json({ message: "backend running successfully" })
})

app.post('/student', (req, res)=>{
   res.json({message: "student created successfully"})
})

export default app;