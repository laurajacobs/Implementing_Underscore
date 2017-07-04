const _first = function (arr, n) {
    if (!Array.isArray(arr) && typeof arr !== 'string') return undefined;
    if (n) return Array.isArray(arr) ? arr.slice(0,n) : arr.substring(0,n).split('')
    return Array.isArray(arr) ? arr[0] : arr.substring(0,1)
    
};

module.exports = {
    _first
};
