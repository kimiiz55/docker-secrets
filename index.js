const fs = require('fs');
const path = require('path');

function getDockerSecret(dir) {
  const output = {};

  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);

    files.forEach(function(file, index) {
      const fullPath = path.join(dir, file);
      const isFile = fs.lstatSync(fullPath).isFile();

      if (isFile) {
        const key = file;
        const data = fs
          .readFileSync(fullPath, 'utf8')
          .toString()
          .trim();

        output[key] = data;
      }
    });
  }

  return output;
}

module.exports = getDockerSecret;
