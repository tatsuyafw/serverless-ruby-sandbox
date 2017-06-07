'use strict';

const exec = require('child_process').exec;

module.exports.hello = (event, context, callback) => {
  const child = exec('./lambdaRuby.rb ' + "'" + JSON.stringify(event) + "'", (err, stdout, stderr) => {
    const body = JSON.parse(stdout);
    const response = {
      statusCode: 200,
      body: JSON.stringify(body)
    };
    callback(null, response);
  });
};
