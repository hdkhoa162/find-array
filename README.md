# find-array

We find array elements by executing a callback function for each one and return all the values that match what you are searching for.

```javascript
const find = require('find-array');
const testArr = [
    { age: 16 },
    { age: 17 },
    {
        name: 'Khoa Huynh',
        school: 'NAIT'
    },
    'Khoa',
    { country: { City: 'EDM', Province: 'AB' }, description: 'caro', language: 'c#' },
    {
        arr1: [1,2,3,4,5]
    },
    ['a', 'b', 'c'],
    { name: 'Khoa', school: 'NAIT', age: 17 },
];

find(testArr, function (obj) {
  return obj.description == 'caro';
});
// [ { key: 4,
//    value: { 
//      country: {
//          City: 'EDM',
//          Province: 'AB'
//       }, 
//       description: 'caro', 
//         language: 'c#' 
//       } 
//    } 
// ]

find(testArr, function (obj) {
  return obj.age > 10;
});
// => [ { key: 0, value: { age: 16 } }, {key: 1, value: { age: 17 } },
//    { key: 8, value: { name: 'Khoa', school: 'NAIT', age: 17 } } ]

```

## Install

```bash
$ npm install find-array
```