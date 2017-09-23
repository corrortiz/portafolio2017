const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);

const Project = require('../models/Project');
const {app} = require('./../server.js');
const {ObjectID} = require('mongodb');
const {testProject, projectId, populateProject} = require('./index');

const projectAssertions = (res) => {
   res.body.should.be.a('object');
   res.body.should.have.property('name');
   res.body.name.should.be.a('object');
   res.body.should.have.property('url');
   res.body.url.should.be.a('string');
   res.body.should.have.property('imageUrl');
   res.body.imageUrl.should.be.a('string');
   res.body.should.have.property('description');
   res.body.description.should.be.a('object');
   res.body.should.have.property('technologies');
   res.body.technologies.should.be.a('array');
};

beforeEach(populateProject);

describe('PROJECT', () => {
   
   describe('GET /api/projects', () => {
      it('should return JSON array of projects', (done) => {
         chai.request(app)
            .get('/api/projects')
            .set('Authorization', process.env.API_KEY)
            .end((err, res) => {
               res.should.have.status(200);
               res.should.be.json;
               res.body.should.be.a('array');
               done();
            });
       });

      it('should return JSON array of a project', (done) => {
         chai.request(app)
            .get(`/api/projects/${projectId.toHexString()}`)
            .set('Authorization', process.env.API_KEY)
            .end((err, res) => {
               res.should.have.status(200);
               res.should.be.json;
               projectAssertions(res);
               done();
            });
      }); 
   });

   describe('POST /api/projects', () => {
      it('should add a project', (done) => {
         let data = testProject.body; 
         data._id = new ObjectID();

         chai.request(app)
            .post('/api/projects')
            .set('Authorization', process.env.API_KEY)
            .send(data)
            .end((err, res) => {
               res.should.have.status(200);
               res.should.be.json;
               projectAssertions(res);
               done();
            });
       });
   });

   describe('DELETE /api/projects/ID', () => {
      it('should delete a project', (done) => {
         Project.find({})
         .then(projects => projects)
         .then((res) => {
            let id = res[0]._id.toHexString()
            chai.request(app)
                  .delete(`/api/projects/${id}`)
                  .set('Authorization', process.env.API_KEY)
                  .end((err, res) => {
                     res.should.have.status(200);
                     res.should.be.json;
                     projectAssertions(res);
                  });
            done();
         })
         .catch((err) => console.warn(err));   
         
      });
   });

});

module.exports = {projectAssertions};