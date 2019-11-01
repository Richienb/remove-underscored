# The module [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/remove-underscored/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/remove-underscored)

Remove keys that start with an underscore from an object or array of objects.

[![NPM Badge](https://nodei.co/npm/remove-underscored.png)](https://npmjs.com/package/remove-underscored)

## Install

```sh
npm install remove-underscored
```

## Usage

```js
const removeUnderscored = require("remove-underscored");

removeUnderscored({
    a: {
        _a: "a",
        b: 1
    },
    _b: ["b"]
});
//=> { a: { b: 1 } }
```

## API

### removeUnderscored(obj)

#### obj

Type: `object or array`

The object or array to handle.
