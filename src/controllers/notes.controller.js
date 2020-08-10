const noteCtrl = {};
const Note = require('../models/Note');

noteCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

noteCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author
  });
  await newNote.save();
  res.json('New note saved');
};

noteCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

noteCtrl.updateNote = async (req, res) => {
  const { title, content, author, date} = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
    author,
    date
  });
  res.json('Note updated');
};

noteCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json('Note deleted');
};


module.exports = noteCtrl;