'use strict';

const findArrayEle = (array, callback) => {
    if (typeof callback !== 'function') {
        throw new Error('Callback should be a function');
    }    
    
    if (!Array.isArray(array)) {
        throw new Error('The first param should be an array');
    }

    let result = [];

    array.map((value, key) => {   
        if (callback.call({}, value, key)) {
            const obj = {};
            obj.key = key;
            obj.value = value;

            result.push(obj); 
        }
    });

    return result;
}

module.exports = findArrayEle;