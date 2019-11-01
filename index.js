"use strict"

const removeIfPrefix = require("remove-if-prefix")

module.exports = (obj) => removeIfPrefix(obj, "_")
