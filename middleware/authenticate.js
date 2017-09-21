const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  if (token === process.env.API_KEY) {
    next();
  }else{
    res.status(401).send({error: 'you are not authorized to use this link'});
  }

};

module.exports = {authenticate};