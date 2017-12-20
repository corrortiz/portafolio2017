require('./config/config');
//Express
const express = require('express');
const bodyParser = require('body-parser');
//Mongose
const {mongoose} = require('./db/mongoose');
const routes = require('./routes/routes');
//GraphQL
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const schema = require('./schema');
const app = express();
const port = process.env.PORT;

// app.use(bodyParser.json());


app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

routes(app);

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
  
module.exports = { app };