const fs = require('fs');
const path = require('path');

const input = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
input.pipe(process.stdout);
input.on('error', (err) => console.log('Error', err.message));
