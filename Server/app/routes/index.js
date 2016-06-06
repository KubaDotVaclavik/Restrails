import React from 'react';
import * as CONST from './../const';


const isProduction = process.env.NODE_ENV === 'production';

const scripts = isProduction ? `/build/` : CONST.BUNDLE_URL;

export default () =>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>First dev-stack</title>
    </head>
    <body>
      <div id="app-root" />
      <script src={scripts} type="text/javascript" />
    </body>
  </html>;