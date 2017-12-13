import path from 'path';
import express from 'express';
import exhbs from 'express-handlebars';
import bodyParser from 'body-parser';
import flash from 'connect-flash';

import initDB from './db';
import index from './app/routes/index'

// Setup database
const models = initDB();

const app = express();

// X-Powered-By header can be extremely useful to
// an attacker for building site's risk profile
app.disable('x-powered-by');

app.use(bodyParser.json());

// View Engine
app.set('views', path.join(__dirname, 'app/views'));
app.engine('hbs', exhbs({
  defaultLayout: 'mainTODO',
  extname: '.hbs',
  layoutsDir: 'dist/app/views/layouts',
}));
app.set('view engine', '.hbs');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'app/assets')));

// Connect Flash
app.use(flash());

app.use('/', index(models.todo));


const listener = app.listen(4000, () => {
  console.info('Listening on port 4000');
});