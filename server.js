const express = require('express');
const createDatabase = require('./createdatabase').createDatabase
const controllers = require('./src/controls');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, World!");
})


app.get('/api/tasks', controllers.getTasks);
app.post('/api/tasks', controllers.addTask);
app.delete('/api/tasks/:id', controllers.removeTask);


createDatabase();
app.listen(3001, ()=> {
    console.log("App listening on port 3001");
})