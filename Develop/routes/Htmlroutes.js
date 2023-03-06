const route = require('express').Router();
const path = require('path');


route.get('/', (req, res) => {

    res.sendFile(path.resolve('./Develop/public/index.html'));

  });
  
route.get('/notes', (req, res) => {

    res.sendFile(path.resolve('./Develop/public/notes.html'));
    
  });



module.exports = route;