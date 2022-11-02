const { readdir } = require('node:fs/promises');
const fs = require('fs');
const path = require('path');
(async () => {
  try {
    const files = await readdir('./03-files-in-folder/secret-folder');
    for (const file of files) {
      let item = fs.statSync('./03-files-in-folder/secret-folder/' + file);

      if (item.isDirectory()) {
        console.log(`
        folder 
        ${file},
        file extension ${path.extname(file)},
        file size ${item.size} byte`);
      } else {
        console.log(`
        file
        ${file},
        file extension ${path.extname(file)},
        file size ${item.size} byte`);
      }
    }
  } catch (err) {
    console.error(err);
  }
})();
