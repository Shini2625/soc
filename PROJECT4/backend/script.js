require('dotenv').config()
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req , res) => {
    res.send('Hello! This is your first attempt')
});
app.get('/login' , (req , res)=>{
    res.send('<h1>trying to login</h1>')
});

app.get('/frnd' , (req, res) => {
    res.send('<h2>your friends list</h2>')
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
});
