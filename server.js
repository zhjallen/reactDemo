const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const config = require('./webpack.config');

const compiler = webpack(config);

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();

// Webpack developer
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});
// this is necessary to handle URL correctly since client uses Browser History
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '', 'index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '', 'index.html'));
});
app.put('/api/login', (req, res) => {
  const credentials = req.body;
  console.log(req.methods,'req')
  // if (credentials.user === 'admin' && credentials.password === '123456') {
  //   res.json({
  //     user: credentials.user,
  //     username: '张三',
  //     role: 'ADMIN',
  //     token: 1,
  //   });
  // } else {
  //   res.status('500').send({
  //     message: '用户名密码错误',
  //   });
  // }
});
