"use strict";

const stylelint = require("stylelint");
const ruleName = "plugin/no-browser-hacks";

module.exports = stylelint.createPlugin(ruleName, () => () => {});
