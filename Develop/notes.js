const fs = require('fs');
const path = require('path');
const {notes} = require('./db/db.json');

let noteArray = [];
// const store = {



function addNote (note, noteArray)  {

    noteArray.push(note);

    fs.writeFileSync(
       "./Develop/db/db.json",
        JSON.stringify(noteArray, null, 2)
    );
}

    
function findID (id, noteArray) {

    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}


function changeNote (editedNote, noteArray) {

    const index = noteArray.findIndex(note => note.id === editedNote.id);

    noteArray.splice(index, 1);
    noteArray.splice(index, 0, editedNote);
    
    fs.writeFileSync(
        join(__dirname, notes),
        JSON.stringify(noteArray, null, 2)
    );
}


function deleateNote (note, noteArray) {

    const index = noteArray.note;
    noteArray.splice(index, 1);

    fs.writeFileSync(
      "./Develop/db/db.json",
        JSON.stringify(noteArray, null, 2)

    );
}

// };
module.exports = {addNote, findID, changeNote, deleateNote};