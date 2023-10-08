const express = require('express');
const postLogin = require('./router/login.router');
const postUser = require('./router/user.router');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', postLogin);
app.use('/user', postUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
