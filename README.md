# Norwegian number formatting issue in node.js

[![Build Status](https://travis-ci.org/csabapalfi/norwegian-numbers.svg?branch=master)](https://travis-ci.org/csabapalfi/norwegian-numbers)

Norway used to use the `no` (Norwegian) language code that's considered legacy now. [ISO_639-1]( https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) considered it macrolanguage.

The new language code(s) are `nb` (Bokmål) and `nn` (Nynorsk) as per Norway's offical languages.

[icu4c aliases `no` to `nb`](https://github.com/unicode-org/icu/blob/master/icu4c/source/data/lang/no.txt). It does the same to `no-NO` as well.

Node.js uses icu4c data but even with `full-icu` it seems to ignore the icu4c alias for number formatting. (Maybe all aliases are ignored?).

```js
// npm install full-icu
// node --icu-data-dir=./node_modules/full-icu
const number = 1234.123
number.toLocaleString('nb-NO') // '1 234,123' <-- correct
number.toLocaleString('no-NO') // '1,234.123'
```

