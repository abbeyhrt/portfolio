'use strict';

const React = require('react');

function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    React.createElement('link', {
      key: 'google-font',
      href: '//fonts.googleapis.com/css?family=IBM+Plex+Mono',
      rel: 'stylesheet',
    }),
  ]);
}

exports.onRenderBody = onRenderBody;
