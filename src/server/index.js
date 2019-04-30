const path = require('path');
const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 8080;
const app = express();
const server = app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
module.exports = app;

// logging middleware
app.use(morgan('dev'));

// static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', '../dist')));
// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 'API' routes
app.use('/api', require('./api'));

// 404 middleware
app.use((req, res, next) =>
  path.extname(req.path).length > 0 ?
    res.status(404).send('Not found') :
    next()
);

// // send index.html
// app.use('/', (req, res, next) => {
//   console.log('HELLO??')
//   console.log('INSIDE');
//   res.sendFile(path.join(__dirname, '..', 'dist/index.html'))
// }
// );

// error handling endware
app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.')
);
