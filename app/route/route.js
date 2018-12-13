var express = require('express');
var model = require('../model/model');
var router = express.Router();

module.exports.routes = function(app) {

  //app.use('/login');

  app.get('/', function(req, res) {
    res.send('Hello Nodejs World!!!!');
  });

  app.post('/login', function( req, res ){

    model.Login.create({
      
      uid: req.body.uid,
      email: req.body.email,
      service : req.body.service,
      ip : req.body.ip,
      agent : req.body.agent,
      data : req.body.data
    }).then((login) => res.status(201).json(login));
    
  });

};

// router.get('/',  (req, res) =>{
//   res.send('Hello World!!!!');
// });

// router.post('/reqLogin',function (req, res){
// 	res.send("hello reqLogin");
// });

// // router.post('/login', login.create);

// module.exports = router;


// // module.exports = function(app) {
 
// //   const loginLog = require('../controller/loginController.js');

// //   app.post('/login', loginLog.create);

// //   app.get('/', (req, res) => {
// //     res.send('Hello nodejs World!\n');
// //    });
  
// //   //app.post('/reqLogin', );

// // }