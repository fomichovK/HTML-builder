const { readdir } = require('node:fs/promises');
const { createWriteStream } = require('fs');
const fs = require('fs');
const path = require('path');

const writeToFile = createWriteStream('./05-merge-styles/project-dist/bundle.css');

(async () => {
  try {
    const files = await readdir('./05-merge-styles/styles');

    for (const file of files) {
      if (path.extname(file) == '.css') {
        let item = `./05-merge-styles/styles/${file}`;

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
