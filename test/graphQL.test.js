const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);

const {app} = require('./../server.js');
const {testProject, projectId, populateProject} = require('./index');

beforeEach(populateProject);

describe('GQL', () => {
   it('should return json of projects', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({'query': `
               {
                  allProjects{
                     _id
                     url
                     imageUrl
                  }
               }
         `})
            .end((err, res) => {
               res.should.have.status(200);
               res.should.be.json;
               res.body.should.be.a('object');
               done();
            });
   });

   it('should get a JSON project wiht the ID', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({
         'query': `
            query aProject($id: ID!){
               aProject(id: $id){
                  url
               }
            }
         `,'variables':`
            {
               "id": "${projectId}"
            }
         `})
            .end((err, res) => {
               res.should.have.status(200);
               res.should.be.json;
               res.body.should.be.a('object');
               var project = res.body.data.aProject;
               project.should.be.a('object');
               project.should.have.property('url');
               project.url.should.be.a('string');
               project.url.should.equal('www.algo.com');
               done();
            });
   });

   it('should add a project and return json of the same project', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({
         'query': `
            mutation addProject($project: ProjectInput){
               addProject(data: $project){
                  _id
               }  
            }
         `,'variables':`
            {
               "project": {
                  "name": {
                     "es": "español",
                     "en": "ingles"
                  },
                  "description": {
                  "es": "descripcion en español",
                  "en": "descripcion en ingles"
                  },
                  "technologies": [
                     "one",
                     "two",
                     "three"
                  ],
                  "url": "www.url",
                  "imageUrl": "www.imagen"
               }
            }
         `})
            .end((err, res) => {
               res.should.have.status(200);
               res.should.be.json;
               res.body.should.be.a('object');
               var project = res.body.data.addProject;
               project.should.be.a('object');
               project.should.have.property('_id');
               project._id.should.be.a('string');
               done();
            });
   });

   it('should delete a project and return json of the same project', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({
         'query': `
            mutation deleteProject($id: ID!){
               deleteProject(id: $id){
                  url
               }  
            }
         `,'variables':`
            {
               "id": "${projectId}"
            }
         `})
            .end((err, res) => {
               res.should.have.status(200);
               res.should.be.json;
               res.body.should.be.a('object');
               var project = res.body.data.deleteProject;
               project.should.be.a('object');
               project.should.have.property('url');
               project.url.should.be.a('string');
               done();
            });
   });
               
   it('should modify a project and return json of the modify project', (done) => {
      chai.request(app)
         .post('/graphql')
         .send({
         'query': `
            mutation modifyProject($project: ProjectInput, $id: ID!){
               modifyProject(data: $project, id: $id){
                  name {
                     es
                     en
                  }
                  description {
                     es
                     en
                  }
                  technologies
                  url
                  imageUrl
               }  
            }
         `,'variables':`
         {
            "project": {
               "name": {
                  "es": "español",
                  "en": "ingles"
               },
               "description": {
                  "es": "descripcion en español",
                  "en": "descripcion en ingles"
               },
               "technologies": [
                  "one",
                  "two",
                  "three"
               ],
               "url": "www.url.com",
               "imageUrl": "www.imagen"
            },
               "id": "${projectId}"
            }
      `})
         .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            var project = res.body.data.modifyProject;
            project.should.be.a('object');
            project.should.have.property('url');
            project.url.should.be.a('string');
            project.url.should.equal('www.url.com');
            done();
         });
   });

});