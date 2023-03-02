const route = require('express').Router();
const { Router } = require('express');
const {v4: uuidv4} = require('uuid');
const notes = require('../db/db.json');
const {addNote, findID, changeNote, deleateNote} = require('../notes.js');

uuidv4();

route.get('/notes', (req, res) => {

    return res.json(notes);

});

route.post('/notes', (req, res) => {
    
    if(!req.body.id) {
        req.body.id = uuidv4();
        addNote(req.body, notes);
    } 
    
    else {
        changeNote(req.body, notes);
    }

    res.json(req.body);

});


route.delete('/notes/:id', (req, res) => {

    const noteOne = findID(req.params.id, notes);

    deleateNote(noteOne, notes);
    res.json();

});



module.exports = route;