import path from 'path';
import express from 'express';
import logger from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import pipe from '~/utils/pipe';
import { bodyStyles } from '~/constants';
import App from './app';
import html from './html';
import { entry } from '../config/webpack.config.base';
import manifest from '../public/manifest.json';

const port = 3000;
const server = express();

server.use(express.static(path.resolve(__dirname, '../public')));

server.get('*', (req, res) => {
  const location = req.url;
  const context = {};
  const body = renderToString(<App location={location} context={context} />);
  const files = pipe(
    Object.keys,
    files => files.map((file) => {
      const key = `${file}.js`;

      return `/${manifest[key]}`;
    }),
  )(entry);

  const helmet = Helmet.renderStatic();
  const head = helmet.title + helmet.meta + helmet.link;
  const styles = `body { ${bodyStyles} }`;

  if (context.url) {
    res.writeHead(302, {
      Location: location,
    });
    res.end();
  } else {
    res.send(
      html({
        head,
        body,
        styles,
        files,
      })
    );
  }
});

server.use(logger('dev'));

server.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
