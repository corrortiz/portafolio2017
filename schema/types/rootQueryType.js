const graphql = require('graphql');
const { 
  GraphQLObjectType, 
  GraphQLList,
  GraphQLID } = graphql;

const axios = require('axios');

const ProjectType = require('./projectType');
const Project = require('../../models/Project');

const API_URL = 'http://localhost:3001/api/projects';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue, args, req) {
          return axios.get(`${API_URL}`, {headers: {'Authorization': process.env.API_KEY}})
                      .then(res=> res.data);  
      }
    }
  }
});

module.exports = RootQueryType;