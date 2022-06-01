const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(('/home'),shopRoutes)
app.use(('/admin'),adminRoutes)


app.use('/', (req,res) =>{
    res.status(404).sendfile(path.join(__dirname, 'views', '404.html'))
})

const port = 3000;
app.listen(port, () => {
    console.log(`Started server on port ${port}`)
})