//task 4
var fs = require('file-system');
const date = new Date();
fs.mkdir('./newDir', function(err) {
    if (err) console.error(err)
        else console.log('Done!')
});
fs.writeFile('./newDir/newfile.txt', date , function (err) {
    if (err) throw err;
    console.log('Saved!');
  });