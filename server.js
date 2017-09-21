require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
  
module.exports = { app };