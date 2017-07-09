const _indexOf = function (arr, value, isSorted) {
    if (isSorted) return // binary search
    if (!Array.isArray(arr) && typeof arr !== 'string') return -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    
}
    return -1;
    
}

module.exports = {
    _indexOf
};