const express = require('express');
const app = express();

app.get('/home', (req,res)=>{
    res.send('OLA')
})

const port = 3000;
app.listen(port, () =>{
    console.log(`Started server on port ${port}`)
})