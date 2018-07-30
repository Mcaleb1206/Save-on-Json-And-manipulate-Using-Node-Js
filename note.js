console.log('Starting Notes');

const fs = require('fs');
var fecthNotes = () =>{
  try {
    var notesrting=fs.readFileSync('note-data.json');
    return JSON.parse(notesrting);
  } catch (e) {
return [];
  }
};

var saveNotes = (notes) => {
fs.writeFileSync('note-data.json',JSON.stringify(notes));
}

var addNote=(umutwe,igihimba) => {
  var notes = fecthNotes();
  var note ={
    umutwe:umutwe,
    igihimba:igihimba
  };

var duplicatenote= notes.filter((note) => note.umutwe === umutwe);
if(duplicatenote.length === 0)
{
  notes.push(note)
  saveNotes(notes);
  return note;
}


};
var getAll=()=>{
  return fecthNotes();
};
var getNote=(umutwe)=>
{
  var notes=fecthNotes();
  var filternote2=notes.filter((note) => note.umutwe === umutwe);
  return filternote2[0];
};

var removeNote = (umutwe) =>{
var notes= fecthNotes();
var filterNote= notes.filter((note) => note.umutwe !== umutwe);
saveNotes(filterNote)
return notes.length !== filterNote.length;
};
var logNote = (note) =>
{
  debugger;
  console.log('---');
  console.log('Umutwe :',note.umutwe);
  console.log('igihimba : ',note.igihimba);
};
module.exports={
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
