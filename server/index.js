const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 4172;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));



/* SERVER FUNCTIONS FOR HANDLING THE ROUTES */

app.get('/api/text/:id', (req, res) => {
  let { id } = req.params;
  db.Text.find({ id })
  .then((data) => {
    console.log('this is data in server', data[0]);
    res.status(200).send(data);
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

app.get('/api/qanda/:id', (req, res) => {
  let { id } = req.params;
  db.QandA.findById(id)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

app.get('/api/gallery/:id', (req, res) => {
  let { id } = req.params;
  db.Gallery.findById(id)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

app.listen(port, () => {console.log('server listening on port' , port)});