const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const model = require('./app/model/model');

app.use(bodyParser.json());
require('./app/route/route').routes(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');

  model.sequelize.sync({force: false})
      .then(() => {
        console.log('Databases sync');
      });
});

module.exports = app;