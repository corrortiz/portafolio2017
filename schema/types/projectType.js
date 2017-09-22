const graphql = require('graphql');
const Project = require('../../models/Project');

const axios = require('axios');
const API_URL = 'http://localhost:3001/api/projects';


const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString
} = graphql;

const NameType = new GraphQLObjectType({
  name:  'name',
  fields: () => ({
    en: { type: GraphQLString },
    es: { type: GraphQLString }
  })
});

const DescriptionType = new GraphQLObjectType({
  name:  'description',
  fields: () => ({
    en: { type: GraphQLString },
    es: { type: GraphQLString }
  })
});


const ProjectType = new GraphQLObjectType({
  name:  'Project',
  fields: () => ({
    _id: { type: GraphQLID },
    url: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    technologies: { type: new GraphQLList(GraphQLString) },
    name: {type: NameType},
    description: {type: DescriptionType}
  })
});

module.exports = ProjectType;