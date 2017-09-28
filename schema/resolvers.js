const axios = require('axios');
const Project = require('../models/Project');

const API_URL = 'http://localhost:3001/api/projects';

module.exports = {
   Query: {
      allProjects: () => {
         return axios.get(`${API_URL}`, {headers: {'Authorization': process.env.API_KEY}})
                        .then(res=> res.data);  
      }
   },
   Mutation: {
      addProject: (_, data) =>{
         return Project.create(data.data).then(project => project).catch((err) => err);  
      }
   }
 };