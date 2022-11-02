const { createReadStream } = require('node:fs');
let readableStream = createReadStream('01-read-file/text.txt');

readableStream.on('data', function (chunk) {
  console.log(chunk.toString());
});
