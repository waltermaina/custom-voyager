import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Voyager } from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

function introspectionProvider(query) {
  return fetch("https://developer.github.com/v4/explorer/", {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({ query: query }),
  }).then((response) => response.json());
}

ReactDOM.render(
  <Voyager introspection={introspectionProvider} />,
  document.getElementById('root'),
);