require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set('db', db);
  console.log('You are connected to the database');
}).catch(err => console.error(err));

app.get('/api/shelf/:id', (req, res) => {
  const db = req.app.get('db');
  shelfID = req.params.id;
  console.log(shelfID);
  db.readShelf([ shelfID ])
    .then( shelf => res.status(200).json( shelf ) )
    .catch(err => console.error(err));
});

app.get('/api/bin/:id', (req, res) => {
  const db = req.app.get('db');
  shelfID = req.params.id[0];
  binID = req.params.id[1];
  db.readBin([ shelfID, binID ])
    .then( bin => res.status(200).json( bin ))
    .catch(err => console.error(err)); 
})

app.post('/api/bin/:id', (req, res) => {
  const db = req.app.get('db');
  const { name, price } = req.body;
  shelfID = req.params.id[0];
  binID = req.params.id[1];
  db.createBin([ shelfID, binID, name, price ])
    .then(() => res.status(200).json())
    .catch(err => console.error(err));
});

app.put('/api/bin/:id', (req, res) => {
  const db = req.app.get('db');
  const { name, price } = req.body;
  const shelfID = req.params.id[0]; 
  const binID = req.params.id[1];
  db.updateBin([ shelfID, binID, name, price ])
    .then(( bin ) => res.status(200).json( bin ))
    .catch(err => console.error(err)); 
})

app.delete('/api/bin/:id', (req, res) => {
  const db = req.app.get('db');
  const shelfID = req.params.id[0]; 
  const binID = req.params.id[1];
  db.deleteBin([ shelfID, binID ])
    .then(() => res.status(200).json())
    .catch(err => console.error(err));
})

app.listen(PORT, () => console.log('You are connected on Port: ' + PORT));
