const { readdir, copyFile } = require('node:fs/promises');
const fs = require('fs');

const dirCopy = './04-copy-directory/file-copy';
const filesFilder = './04-copy-directory/files/';

const newDir = fs.mkdir(dirCopy, (err) => {
  if (err) console.log(err);
});

(async () => {
  const files = await readdir(dirCopy);
  for (const file of files) {
    await fs.unlink(`${dirCopy}/${file}`, (err) => {
      if (err) throw err; 
        });
  }
})();

(async () => {
  const files = await readdir(filesFilder);

  for (const file of files) {
    try {
      await copyFile(`${filesFilder}/${file}`, `${dirCopy}/${file}`);
      console.log(file + ' - was copied');
    } catch {
      console.log(file + ' - The file could not be copied');
    }
  }
})();
