import { writeFileSync } from 'fs';
import { join } from 'path';
import { notes } from './db/db.json';

let noteArray = [];


const addNote = (note, noteArray) => {

    noteArray.push(note);

    writeFileSync(
       "./db/db.json",
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
    
    writeFileSync(
        join(__dirname, notes),
        JSON.stringify(noteArray, null, 2)
    );
};


const deleateNote = (note, noteArray) => {

    const index = noteArray.indexOf(note);
    noteArray.splice(index, 1);

    writeFileSync(
      "./db/db.json",
        JSON.stringify(noteArray, null, 2)

    );
};

export default {addNote, findID, changeNote, deleateNote};