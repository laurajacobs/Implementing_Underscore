// works for array of objects and object of objects only
// everything else returns undefined
// second parameter has to be a string

const _pluck = function (list, propertyName) {
    let result = [];
    if (typeof list === 'number') return result;
    if (typeof list === 'string' || typeof propertyName !== 'string') {
        let result = [];
        for (let i = 0; i < list.length; i++) {
            result.push(undefined);
        }
        return result;
    }
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            for (let key in list[i]) {
                if (key === propertyName) {
                    result.push(list[i][propertyName])
                }
            }
        }
     }  else {
        for (let key in list) {
            for (let key2 in list[key] ) {
                if (key2 === propertyName) {
                    result.push(list[key][propertyName])
                }
            }
        }
    }
        return result;


};

module.exports = {
    _pluck
};