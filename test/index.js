'use strict';

require('mocha');

const assert = require('assert');
const findArrayEle = require('../lib');
const arrPerson = [
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

describe('find Array Element', function() {    
  it('find elements', function() {    
    assert.deepEqual(findArrayEle(arrPerson, function (obj, index) {   
        return obj.description == 'caro';
    }), [ { key: 4,
        value: { country: {
            City: 'EDM',
            Province: 'AB'
        }, 
        description: 'caro', 
        language: 'c#' 
        } } ]);
  });
});

describe('find Array Element with Error (Callback)', function() {    
    it('return errors', function() {
        assert.throws(() => { findArrayEle(arrPerson, 'function') }, Error);
    });
});

describe('find Array Element with Error (Function)', function() {    
    it('return errors', function() {
        assert.throws(() => { findArrayEle({}, 'function') }, Error);
    });
});