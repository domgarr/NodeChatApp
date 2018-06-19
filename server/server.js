const path = require('path');
const publicPath = path.join(__dirname, '../public');

var express = require('express');

var app = express();
//By deafult express server index.html without having to mention in
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("Server is up on 3000");
});

