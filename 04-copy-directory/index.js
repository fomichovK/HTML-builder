
const { readdir, copyFile } = require('node:fs/promises');
const fs = require('fs');

const newDir = fs.mkdir('./04-copy-directory/file-copy', (err) => {
  if (err) console.log(err);
});

(async () => {
  const files = await readdir('./04-copy-directory/files');
  for (const file of files) {
    try {
      await copyFile('./04-copy-directory/files/' + file, './04-copy-directory/file-copy/' + file);
      console.log(' was copied');
    } catch {
      console.log(' The file could not be copied');
    }
  }
})();
