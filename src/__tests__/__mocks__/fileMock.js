const path = require('path');

module.exports = {
  __esModule: true,
  default: 'test-file-stub',
  getCacheKey: (fileData, filename) => {
    const ext = path.parse(filename).ext;
    return `${filename}${ext}`;
  }
};