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
app.get('/api/quote/:id' , (req , res)=>{
     const id = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === id);
  if (quote) {
    res.json([quote]);  // Return as array since frontend expects array
  } else {
    res.json([]);
  }
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
});
