const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const port = 3000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});

app.use(express.static('blog'));