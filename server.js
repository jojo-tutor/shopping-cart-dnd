const express = require('express');
const path = require('path');
const compression = require('compression');
require('dotenv').config({ path: path.join(process.cwd(), 'config/.env') });

const server = express();
const outputPath = path.join(process.cwd(), 'build');

const { PORT = 3000 } = process.env;

server
  .use(compression())
  .use(express.static(path.join(process.cwd(), 'public')))
  .get(/\.js$|\.build.css$/, (req, res, next) => {
    req.url += '.gz';
    const type = req.originalUrl.includes('.js') ? 'javascript' : 'css';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', `text/${type}`);
    res.set('Cache-Control', 'public, max-age=31557600');
    next();
  })
  .use(express.static(outputPath))
  .get('*', (req, res) => {
    res.sendFile(path.join(outputPath, 'index.html'));
  })
  .listen(PORT, () => {
    console.log(`App running at port ${PORT}`);
  });
