const path = require('path');

//This is the path to the directory containg our index
const publicPath = path.join(__dirname, '../public');

//The app will user 3000 locally.
const port = process.env.PORT || 3000;

var express = require('express');

var app = express();
/*
Use Express middleware to server files from given path
By deafult express server index.html without having to mention in
*/
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log("Server is up on ${port}");
});


