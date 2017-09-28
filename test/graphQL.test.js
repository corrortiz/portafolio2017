const chai = require('chai');
const chaiHttp = require('chai-http');
//Chai CONFIG
const should = chai.should();
const expecte = chai.expect;
chai.use(chaiHttp);

const {app} = require('./../server.js');
const {testProject, projectId, populateProject} = require('./index');

const projectAssertions = (res) => {
   const project = res.body.data.project;

   project.should.be.a('object');
   project.should.have.property('name');
   project.name.should.be.a('object');
   project.should.have.property('url');
   project.url.should.be.a('string');
   project.should.have.property('imageUrl');
   project.imageUrl.should.be.a('string');
   project.should.have.property('description');
   project.description.should.be.a('object');
   project.should.have.property('technologies');
   project.technologies.should.be.a('array');
};


describe.skip('GQL', () => {
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

         it('should return json with one project', (done) => {
            chai.request(app)
               .get('/graphql')
               .set('Authorization', process.env.API_KEY)
               .send({'query': `
                  {
                     project(id:"${projectId}"){
                     _id
                     name {
                        en
                        es
                     }
                     description {
                        en
                        es
                     }
                     imageUrl
                     technologies
                     url
                  }
                  
                  }
               `})
                  .end((err, res) => {
                     res.should.have.status(200);
                     res.should.be.json;
                     res.body.should.be.a('object');
                     projectAssertions(res)
                     done();
                  });
               });

         it('should delete one project', (done) => {
            chai.request(app)
               .post('/graphql')
               .set('Authorization', process.env.API_KEY)
               .send({'query': `
                     mutation deleteProject($ID: ID){
                        deleteProject(ID: $ID){
                        name {
                           en
                           es
                        }
                        description {
                           en
                           es
                        }
                        technologies
                        imageUrl
                        url
                        }
                     }
               `, 'variables':{"ID": projectId}})
                  .end((err, res) => {
                     res.should.have.status(200);
                     res.should.be.json;
                     res.body.should.be.a('object');
                     projectAssertions(res)
                     done();
                  });
               });
         
});