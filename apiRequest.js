const http = require('http');

const word = 'example';

const options = {
  hostname: 'api.dictionaryapi.dev',
  port: 443,
  path: `/api/v2/entries/en/${word}`,
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const jsonResponse = JSON.parse(data);
    console.log(jsonResponse);
  });
});

req.on('error', (error) => {
  console.error(`Error making API request: ${error}`);
});

req.end();
