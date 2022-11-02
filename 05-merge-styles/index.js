const { readdir } = require('node:fs/promises');
const { createWriteStream } = require('fs');
const fs = require('fs');
const path = require('path');

const styleFolder = './05-merge-styles/styles';

const writeToFile = createWriteStream('./05-merge-styles/project-dist/bundle.css');

(async () => {
  try {
    const files = await readdir(styleFolder);

    for (const file of files) {
      if (path.extname(file) == '.css') {
        let item = `${styleFolder}/${file}`;

        fs.readFile(item, (err, data) => {
          if (err) throw err;
          writeToFile.write(data.toString());
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
})();
