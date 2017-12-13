import Handlebars from 'express-handlebars';
import { Router } from 'express';

export default (Todo) => {

  // const getAllTasks = (callback) => {
  //   Todo.find({}, (err, res) => {
  //     if (err) return console.error(err);

  //     callback(res);
  //   });
  // };

  const api = Router();
  api.get('/', (req, res) => {
    Todo.getAllTasks((tasks) => {
      return res.render('index', {
        title: 'Test Title',
        contents: tasks,
      });
    });
  });

  return api;
}