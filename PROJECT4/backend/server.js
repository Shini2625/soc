import dotenv from 'dotenv';
dotenv.config()
import express from 'express';

const app = express();
const port = process.env.PORT;
const quotes = [
    {id:3 , text:"you r ur own boss"},
    {id:2 , text:"you r a baddie" },
    {id:1 , text:"you r gay"}
];

app.get('/api/', (req , res) => {
    res.send('Hello! This is your first attempt')
});
app.get('/api/login' , (req , res)=>{
    res.send('<h1>trying to login</h1>')
});

app.get('/api/frnd' , (req, res) => {
    res.send('<h2>your friends list</h2>')
});
app.get('/api/quote' , (req , res)=>{
    res.json(quotes);
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
});
