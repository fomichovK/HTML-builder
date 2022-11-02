const fs = require('fs');
const item = '01-read-file/text.txt';
fs.readFile(item, (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});
