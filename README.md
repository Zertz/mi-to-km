# mi-to-km [![Build Status](https://travis-ci.org/Zertz/mi-to-km.svg?branch=master)](https://travis-ci.org/Zertz/mi-to-km) [![NPM version](https://badge.fury.io/js/mi-to-km.png)](http://badge.fury.io/js/mi-to-km)

> Convert miles to kilometers


## Install

```
$ npm install --save mi-to-km
```


## Usage

```js
const miToKm = require('mi-to-km');

miToKm(1);
//=> 1.609344

miToKm('unicorns');
//=> undefined
```


## API

### miToKm(input, [options])

#### input

Type: `number`

Returns `undefined` when input is not a number or cannot be parsed to one.


## License

MIT © [Pier-Luc Gendreau](https://github.com/Zertz)
