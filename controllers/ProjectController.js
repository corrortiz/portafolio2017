const Project = require('../models/Project');

module.exports = {
    create(req, res, next){
        const recibeData = req.body;
        Project.create(recibeData)
            .then(project => res.send(project))
            .catch((err) => res.status(400).send(err));
    },

    delete(req, res, next){
        const id = req.params.id;

        Project.findOneAndRemove({_id: id})
            .then((project) => {
                if (!project) {
                    return res.status(404).send({error: `the ID ${id} not found`});
                }

                res.send(project);
            }).catch((err) => res.status(400).send(err));
    },

    find(req, res, next){
        const id = req.params.id;

        Project.findOne({_id: id})
            .then((project) => {
                if (!project) {
                    return res.status(404).send({error: `the ID ${id} not found`});
                }

                res.send(project);
            }).catch((err) => res.status(400).send(err));
    },
    
    findAll(req, res, next){
        Project.find({})
            .then((projects) => {
                if (!projects) {
                    return res.status(404).send();
                }

                res.send(projects);
            }).catch((err) => res.status(400).send(err));
    },

    modify(req, res, next){
        const recibeData = req.body;
        const id = req.params.id;
        
        Project.findOneAndUpdate({_id: id}, {$set: recibeData}, {new: true})
        .then((project) => {
            if (!project) {
                return res.status(404).send({error: `the ID ${id} not found`});
            }
        
            res.send(project);
          }).catch((err) => res.status(400).send(err));
    },

};