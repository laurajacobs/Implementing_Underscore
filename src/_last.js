const _last = function (arr, n) {
    const length = arr.length;
    if (!Array.isArray(arr) && typeof arr !== 'string') return undefined;
    if (n > length) return Array.isArray(arr) ? arr : arr.split('');
    if (n) return Array.isArray(arr) ? arr.slice(length - n, length) : arr.substring(length - n,length).split('')
    return Array.isArray(arr) ? arr[length - 1] : arr.substring(length - 1, length);
    
};

module.exports = {
    _last
};
