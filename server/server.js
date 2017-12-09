const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3420;

var app = express();

app.use(express.static(publicPath));

// app.get("/", (req, res)=>{
// })

app.listen(port, ()=>{
    console.log(`app is listening on port 3430 ${port}`);
});