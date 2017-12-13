import Handlebars from 'express-handlebars';
import { Router } from 'express';

export default (Todo) => {
  const api = Router();

  api.post('/addTask', (req, res) => {
    console.log(req.params.todo);
    res.sendStatus(200);
  });

  api.get('/readTasks', (req, res) => {
    Todo.getAllTasks((tasks) => {
      return res.json(tasks);
    });
  });

  api.get('/', (req, res) => {
    return res.render('index', {
      title: 'Test Title',
    });
  });

  return api;
};