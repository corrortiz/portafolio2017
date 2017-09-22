require('./config/config');
//Express
const express = require('express');
const bodyParser = require('body-parser');
//Mongose
const {mongoose} = require('./db/mongoose');
const routes = require('./routes/routes');
//GraphQL
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');


const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

routes(app);

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));
  


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
  
module.exports = { app };