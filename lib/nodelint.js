/*jslint node: true */
var vm = require("vm");
var fs = require("fs");

var ctx = vm.createContext();

vm.runInContext(fs.readFileSync(__dirname + "/../vendor/JSLint/jslint.js"), ctx);

module.exports = ctx.JSLINT;
