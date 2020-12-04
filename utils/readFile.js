const fsPromises = require('fs').promises;

// Возвращает промис fsPromises.readFile
function readFile(path) {
  return fsPromises.readFile(path, { encoding: 'utf8' });
}

module.exports = readFile;
