const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(5000, () => {
    console.log('app listening for requests on port 5000');
})