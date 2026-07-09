const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req , res) => {
    res.send('Hello! This is your first attempt')
});
app.get('/login' , (req , res)=>{
    res.send('you are trying to login')
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
});
