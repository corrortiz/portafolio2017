var Project = require('../controllers/ProjectController');

var {authenticate} = require('../middleware/authenticate');

module.exports = (app) => {
  app.delete('/api/projects/:id', authenticate, Project.delete);
  
  app.patch('/api/projects/:id', authenticate, Project.modify);
  
  app.get('/api/projects/:id', authenticate, Project.find);
  app.get('/api/projects', authenticate, Project.findAll);

};
