//task 4
const fs = require('file-system');
const date = new Date();
fs.mkdir('./newDir', (err) => {
    if (err) console.error(err)
        else console.log('Done!')
});
fs.writeFile('./newDir/newfile.txt', date , (err) => {
    if (err) throw err;
    console.log('Saved!');
  });