const pool = require('../db');
const queries = require('./queries');

const getTasks = (req, res) => {
    pool.query(queries.getTasks, (error, results) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.json(results.rows);
        }
    });
};

const addTask = (req, res) => {
    // Req.body ma'lumotlarini to'g'ri formatda olish
    const { name, is_done } = req.body;

    // Ma'lumotlarning mavjudligini tekshirish
    if (typeof name !== 'string' || !name.trim()) {
        return res.status(400).send('Name is required and must be a non-empty string.');
    }
    if (typeof is_done !== 'boolean') {
        return res.status(400).send('is_done must be a boolean value.');
    }

    pool.query(queries.addTask, [name,is_done], (error, results) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.json({ message: 'Task added successfully' });
        }
    });
};


const removeTask = (req, res) => {
    console.log(req.params.id)
    const id  = req.params.id
    
    pool.query(queries.checkTask, [id], (error, results)=>{
        if(error){
            res.status(500).send(error.message);
        }
        if(!results.rows.length){
            res.status(404).send("Task not found.");
        }else{
            pool.query(queries.removeTask, [id], (error,results)=>{
                if(error) throw error;
                res.json({ message: 'Task removed successfully' });
            })
        }
    })
}

module.exports = {
    getTasks,
    addTask,
    removeTask,
};
