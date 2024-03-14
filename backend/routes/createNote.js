const myRouter = require('express').Router();
const Note = require('../models/note.model');

// myRouter.post('/',(req,res) => {
//   const {title, content} = req.body;
//   const newNote = new Note({
//     title,
//     content,
//   });
//   newNote.save()
//   .then((savedNote) => {
//     console.log('Note saved Successfully : ', savedNote);
//     res.status(200).json({ message: 'Note created Successfully', note: savedNote});
//   })
//   .catch((error) => {
//     res.status(500).json({ message: 'Error creating Note', error: 'Internal Server Error'});
//   })
// })

myRouter.post('/', (req,res) => {
  const {title, content} = req.body;
  const newNote = new Note({
    title,
    content,
  });
  newNote.save()
  .then((savedNote) => {
    console.log("Note saved succesfully: ", savedNote);
    res.status(200).json({ message: 'Note created successfully', note: savedNote });
  })
.catch((error) => {
  res.status(500).json({ message: 'Error creating note', error: 'Internal Server error'})
  })
});


console.log('Router created');

module.exports = myRouter;
