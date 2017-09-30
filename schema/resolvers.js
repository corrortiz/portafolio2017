const axios = require('axios');
const Project = require('../models/Project');

const API_URL = 'https://api-portafolio-2017.herokuapp.com/api/projects';

module.exports = {
   Query: {
      allProjects: () => {
         return axios.get(`${API_URL}`, {headers: {"Authorization": process.env.API_KEY}})
                        .then(res=> res.data);  
      },
      aProject: (_, {id}) => {
        return axios.get(`${API_URL}/${id}`, 
                    {headers: {'Authorization': process.env.API_KEY}})
                    .then(res=> res.data);
      }
   },
   Mutation: {
      addProject: (_, {data}) =>{
         return Project.create(data).then(project => project).catch((err) => err);  
      },
      deleteProject: (_, {id}) =>{
        return axios.delete(`${API_URL}/${id}`, 
                    {headers: {'Authorization': process.env.API_KEY}})
                    .then(res=> res.data);
      },
      modifyProject: (_, {data, id}) =>{
        return Project.findOneAndUpdate({_id: id}, {$set: data}, {new: true})
                      .then((project) => {
                          if (project.name === null) {
                              return {error: `the ID ${id} not found`};
                          }
                      
                          return project;
                        }).catch((err) => {
                          return err;
                        }); 
      },
   }
 };