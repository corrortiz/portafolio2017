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
    deleteProject: {
      type: ProjectType,
      args: {
         ID: { type: GraphQLID }
      },
      resolve(parentValue, { ID }) {
        return axios.delete(`${API_URL}/${ID}`, 
                    {headers: {'Authorization': process.env.API_KEY}})
                    .then(res=> res.data);  
      }
    }
   }
});

module.exports = mutation;
