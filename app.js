const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(('/home'),shopRoutes)
app.use(('/admin'),adminRoutes)


const port = 3000;
app.listen(port, () => {
    console.log(`Started server on port ${port}`)
})