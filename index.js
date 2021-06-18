const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes.js');

const mongoose = require('./db.js');

const app = express();

app.use(bodyParser.json());
app.use(cors({origin:'*'}));

app.listen(3000,()=>console.log('server started at port 3000'));

app.use('/chat',routes);

