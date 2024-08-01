import http from 'node:http';
import fs from 'node:fs/promises';

import data from './cars.json' assert { type: 'json' };

const headers = {
  'Access-Control-Allow-Origin': '*' /* @dev First, read about security */,
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Max-Age': 2592000, // 30 days
  /** add other headers as per requirement */
  'Content-Type': 'application/json',
};

http
  .createServer(async (req, res) => {
    if (req.url === '/cars') {
      try {
        res.writeHead(200, headers);
        res.end(JSON.stringify(data));
      } catch (error) {
        throw new Error(error);
      }
    }
  })
  .listen(8080);
