const graphql = require('graphql');
const { 
   GraphQLObjectType, 
   GraphQLString, 
   GraphQLID 
} = graphql;

const ProjectType = require('../types/projectType');
const Project = require('../../models/Project');

const axios = require('axios');

const API_URL = 'http://localhost:3001/api/projects';


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProject: {
      type: ProjectType,
      args: {
         _id: { type: GraphQLID }
      },
      resolve(parentValue, { title }) {
        return axios.post(`${API_URL}`, {headers: {'Authorization': process.env.API_KEY}})
                  .then(res=> res.data);  
      }
    },
    deleteProject: {
      type: ProjectType,
      args: {
         _id: { type: GraphQLID }
      },
      resolve(parentValue, { title }) {
        return axios.post(`${API_URL}`, {headers: {'Authorization': process.env.API_KEY}})
                  .then(res=> res.data);  
      }
    },
   }
});

module.exports = mutation;
