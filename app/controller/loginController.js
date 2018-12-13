const Login = require('../model/model.js');

// model.Login.create = (req, res) => {
//   const email = req.body.email ;
//   const service = req.body.servce;
//   const data = req.body.data || '';
//   model.Login.create({
//     email: req.body.email,
//     service: req.body.service,
//     data: req.body.data
//   }).then((login) => res.status(201).json(login))
// };

exports.create = function(req, res) {
  Login.create({
    uid: req.body.uid,
    email: req.body.email,
    service : req.body.service,
    ip : req.body.ip,
    agent : req.body.agent,
    data : req.body.data
  }).then((login) => res.status(201).json(login))
};

