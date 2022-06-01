const path = require("path");

module.exports.renderHome = (req,res)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
}