//task 5
const http = require('http');
const fs = require('file-system');

http.get('http://wttr.in/~kharkov', (res) => {
  if (res.statusCode !== 200) throw new Error(res.statusCode);
  let result = '';
  res.on('data', data => result += data);
  res.on('end', () => {
    fs.writeFile('./weather.html', result, (err) => {
      if (err) throw err;
      console.log('Weather created!');
    });
  });
});