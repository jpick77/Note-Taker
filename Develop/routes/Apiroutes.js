const route = require('express').Router();
const { Router } = require('express');
const {v4: uuidv4} = require('uuid');
const notes = require('../db/db.json');
const {createNote, findID, editNote, removeNote} = require('../notes.js');

uuidv4();

route.get('/notes', (req, res) => {

    return res.json(notes);

});

route.post('/notes', (req, res) => {
    
    if(!req.body.id) {
        req.body.id = uuidv4();
        createNote(req.body, notes);
    } 
    
    else {
        editNote(req.body, notes);
    }

    res.json(req.body);

});


route.delete('/notes/:id', (req, res) => {

    const noteOne = findID(req.params.id, notes);

    removeNote(noteOne, notes);
    res.json();

});



module.exports = route;