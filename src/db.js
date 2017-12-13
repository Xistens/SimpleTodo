import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';

export default () => {
  const connection = mongoose.createConnection('mongodb://localhost:27017/Todo', {
    useMongoClient: true,
  });

  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(err);
    process.exit(1);
  });

  // connection is accessible from any module now
  global.db = connection;

  // Get all model files from app/models
  const files = fs.readdirSync(path.join(__dirname, 'app/models'));
  const out = {};

  for (let i = 0; i < files.length; i++) {
    if (path.extname(files[i]) === '.js') {
      const filename = path.basename(files[i], '.js');
      out[filename] = require(path.join(__dirname, 'app/models/', files[i]));
    }
  }

  return out;
};