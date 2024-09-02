const getTasks = 'SELECT * FROM tasks';
const addTask = 'INSERT INTO tasks (title, is_finished) VALUES ($1, $2)';
const checkTask = 'SELECT * FROM tasks WHERE id = $1';
const removeTask = 'DELETE FROM tasks WHERE id = $1'; 
const updateTask = 'UPDATE tasks SET title = $1 WHERE id = $2';

module.exports = {
    getTasks,
    addTask,
    checkTask,
    removeTask,
    updateTask,
};
