/* jshint node: true */
'use strict';

module.exports = {
  name: 'indie-ui',
  setupPreprocessorRegistry(type, registry) {
    this.eachAddonInvoke('setupPreprocessorRegistry', [type, registry]);
  },
};
