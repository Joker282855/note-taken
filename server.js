const { notes } = require("./db/db.json");
const express = require('express');

const app = express();

<<<<<<< HEAD
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server now runn on port ${PORT}!`);
});
=======
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
>>>>>>> develop

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter(notes => notes.title === query.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(notes => notes.text === query.text);
    }
    return filteredResults;
}

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    return note;
}

app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    
    res.json(notes);  
});

app.listen(3001, () => {
    console.log(`Server no runn on port 3001`);
});