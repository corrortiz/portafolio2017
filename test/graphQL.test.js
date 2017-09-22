const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);

const {app} = require('./../server.js');
const {testProject, projectId, populateProject} = require('./index');


describe('GQL', () => {
   it('should return json of projects', (done) => {
      chai.request(app)
         .get('/graphql')
         .set('Authorization', process.env.API_KEY)
         .send({'query': `
            {
               projects{
               _id
               name {
                  en
                  es
               }
               description {
                  en
                  es
               }
               url
               imageUrl
               technologies
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
         
});