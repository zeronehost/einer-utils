const assert = require("assert");

const utils = require("..");

assert.strictEqual(utils.camelUpperToLower("CamelUpperToLower"), "camelUpperToLower");
assert.strictEqual(utils.camelLowerToUpper("camelLowerToUpper"), "CamelLowerToUpper");
assert.strictEqual(utils.camelToLine("camelToLine"), "camel-to-line");
assert.strictEqual(utils.camelToLine("CamelToLine"), "camel-to-line");
assert.strictEqual(utils.camelToLine("camelToLine", "_"), "camel_to_line");
assert.strictEqual(utils.camelToLine("CamelToLine", "_"), "camel_to_line");
assert.strictEqual(utils.lineToCamel("camel-to-line"), "camelToLine");
assert.strictEqual(utils.lineToCamel("camel-to-line", "-", true), "CamelToLine");
assert.strictEqual(utils.lineToCamel("camel_to_line", "_"), "camelToLine");
assert.strictEqual(utils.lineToCamel("camel_to_line", "_", true), "CamelToLine");