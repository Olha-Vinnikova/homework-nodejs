//task 5
const http = require('http');
const fs = require('file-system');

let innerhtml = http.get('http://wttr.in/~kharkov”', (res) => {
 if (res.statusCode !== 200) throw new Error(res.statusCode);
 res.setEncoding('utf-8');
 let result = '';
 res.on('data', data => result += data); 
 res.on('end', () => result); 
});

fs.writeFile('./weather.html', innerhtml , (err) => {
    if (err) throw err;
    console.log('Weather created!');
  });
