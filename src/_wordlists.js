'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// browserify by default only pulls in files that are hard coded in requires
// In order of last to first in this file, the default wordlist will be chosen
// based on what is present. (Bundles may remove wordlists they don't need)
const wordlists = {};
exports.wordlists = wordlists;
let _default;
exports._default = _default;
try {
  exports._default = _default = require('./wordlists/spanish.json');
  wordlists.spanish = _default;
  wordlists.ES = _default;
} catch (err) {}
try {
  exports._default = _default = require('./wordlists/english.json');
  wordlists.english = _default;
  wordlists.EN = _default;
} catch (err) {}
