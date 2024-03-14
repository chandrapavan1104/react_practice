if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }

const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToDB = require('./config/dbcon');
const Note = require('./models/note.model')

const app = express()
app.use(cors());
app.use(express.json());
connectToDB(); 

const createNote = require('./routes/createNote');
const listNotesRouter = require('./routes/listNotes');
app.use('/createNote', createNote );
app.use('/listNotes', listNotesRouter );

app.listen(process.env.PORT);

