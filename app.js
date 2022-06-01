const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.post('/home',(req,_)=>{
    console.log(req.body)
})

app.get('/home', (req, res) => {
    res.send('OLA')
})

const port = 3000;
app.listen(port, () => {
    console.log(`Started server on port ${port}`)
})