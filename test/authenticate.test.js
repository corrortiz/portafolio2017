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

describe('AUTHENTICATE', () => {
   it('should approve GET api / projects', (done) => {
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
         
   it('should refuse to perform GET api / projects', (done) => {
      chai.request(app)
         .get('/api/projects')
         .set('Authorization', 'minerva')
            .end((err, res) => {
               res.should.have.status(401);
               res.should.be.json;
               res.body.should.be.a('object');
               res.body.should.have.property('error');
               res.body.error.should.be.a('string');
               done();
            });
      
   });
});