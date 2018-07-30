console.log('Starting app.');

const fs= require('fs');
const _=require('lodash');
const yargs = require('yargs');

const note=require('./note.js');
var umutweOptions={
  describe:'Title Of the Note',
  demand:true,
  alias:'u'
}
var igihimbaOptions={
  describe:'The Body of the Note',
  demand:true,
  alias:'i'
}
// console.log(process.argv);
const argv= yargs.command('add','Add New Note',{
  umutwe:umutweOptions,
  igihimba:igihimbaOptions
})
.command('list','List all Notes')
.command('read','Read Note',{
umutwe:umutweOptions
})
.command('remove','Remove a Note',{
  umutwe:umutweOptions
}).help().argv
var command = argv._[0];
// var command = process.argv[2];
// console.log('yargs',argv);

// console.log('process:',process.argv);
if(command ==='list')
{
    var AllNote=note.getAll();

    console.log(`Printing ${AllNote.length} Note(s).`);

    AllNote.forEach((notes)=>note.logNote(notes));
}
else if(command ==='add')
{
  console.log('Add a notes');
  var notes=note.addNote(argv.umutwe,argv.igihimba);
  if(notes)
  {
    console.log('Note Created');
note.logNote(notes);
  }
  else {
    console.log('Umutwe wanitswe kare...');
  }
}
else if (command === 'read') {
  var readNotes=note.getNote(argv.umutwe);
  if(readNotes)
  {
    console.log('Note Found');
    note.logNote(readNotes);
  }
  else {
    console.log('Note note Found');
  }

}
else if (command === 'remove') {
  var noteremove=note.removeNote(argv.umutwe);
  var message = noteremove ? 'Note Removed' : 'Note Not found';
  console.log(message);
}
else {
  console.log('no command recognized');
}
