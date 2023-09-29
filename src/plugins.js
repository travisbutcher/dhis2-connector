const malariacases = require('./providers/malariacases/initialize')();
const outputs = [];
const auths = [];
const caches = [];
const plugins = [malariacases];
module.exports = [...outputs, ...auths, ...caches, ...plugins];