const path = require('path');

const webpackConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};

module.exports = webpackConfig;
