const todos = require('../models/todos');

exports.getTodos = (req, res) => {
    todos.find({})
    .then(todos => {
      res.status(200).json(todos);
    });
  };

exports.createTodos = (req,res) => {
    const todo= new todos({
        title: req.body.title,
        description: req.body.mobileDesc,
        duration: req.body.duration
    });
  
    todo.save()
    .then(() => {
        res.status(201).json({
          message: 'todos posted successfully'
        });
    })
    .catch((err) => {
      console.log('error logged at ' + err);
      res.status(400).json({
        message: 'Client screwed up'
      });
    });
};
