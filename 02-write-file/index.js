const { createWriteStream } = require('fs');

console.log('ну начинай излогать свои мысли');

const writeToFile = createWriteStream('./02-write-file/text.txt');
const getDateFromTerminal = process.stdin;

getDateFromTerminal.pipe(writeToFile);

getDateFromTerminal.on('data', (chunk) => {
    const chunkToString = chunk.toString();
    if (chunkToString.match('exit')) {
        console.log('bye bye');
        process.exit();
    }

})
process.on('SIGINT', () => {
    console.log(' bye bye');
    process.exit();
});
