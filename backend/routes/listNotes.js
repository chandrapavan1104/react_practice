const myRouter = require('express').Router();
const Note = require('../models/note.model');


// myRouter.get('/', (req,res) => {
//     const notes = Note.find();
//     console.log('req.json()');
//     res.json(notes);
// })

myRouter.get('/', async (req,res) => {
    try{
        const title = req.body.title;

        let notes = await Note.find({
            "title": title,
        })
        .then((notes) => {
            if(!notes)
            res.status(400).json({message : 'Notes not found'})
            else
            res.send(notes);
            for (const x of notes)
            {console.log(x);}
        });
        // res.json(notes);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: 'Error getting records'});
    }; 
});

module.exports = myRouter;