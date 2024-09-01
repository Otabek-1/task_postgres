const getTasks = 'SELECT * FROM mydatabase';
const addTask = 'INSERT INTO mydatabase (name, task, is_done) VALUES ($1, $2, $3)';

module.exports = {
    getTasks,
    addTask,
};
