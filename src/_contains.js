const { _indexOf } = require('./_indexOf');

const _contains = function (list, value, fromIndex) {
    if (typeof list === 'number') return false;
    if (Array.isArray(list) || typeof list === 'string') {
        if (fromIndex && typeof fromIndex === 'number') {
            list = list.slice(fromIndex, list.length)
        }
        const check = _indexOf(list, value);
        if (check === -1) return false;
        return true;
    } else {
        for (let key in list) {
            if (list[key] === value) {
                return true;
            }
        }
        return false;
    }


};

module.exports = {
    _contains
};