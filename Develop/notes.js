const fs = require('fs');
const path = require('path');
const {notes} = require('./db/db.json');

let noteArray = [];


const addNote = (note, noteArray) => {

    noteArray.push(note);

    fs.writeFileSync(
       "./Develop/db/db.json",
        JSON.stringify(noteArray, null, 2)
    );
};

    
const findID = (id, noteArray) => {

    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}


const changeNote = (editedNote, noteArray) => {

    const index = noteArray.findIndex(note => note.id === editedNote.id);

    noteArray.splice(index, 1);
    noteArray.splice(index, 0, editedNote);
    
    fs.writeFileSync(
        path.join(__dirname, notes),
        JSON.stringify(notesArray, null, 2)
    );
};


const deleateNote = (note, noteArray) => {

    const index = noteArray.indexOf(note);
    noteArray.splice(index, 1);

    fs.writeFileSync(
      "./Develop/db/db.json",
        JSON.stringify(noteArray, null, 2)

    );
};

module.exports = {addNote, findID, changeNote, deleateNote};