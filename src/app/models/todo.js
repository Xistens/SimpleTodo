import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// todoSchema.static('getAllTasks', (callback) => {
//   return this.find({}, callback);
// });

todoSchema.static({
  getAllTasks(callback) {
    this.find({}, (err, tasks) => {
      if (err) return console.error(err);
      return callback(tasks);
    });
  }
})

module.exports = db.model('Todo', todoSchema, 'todoCollection');