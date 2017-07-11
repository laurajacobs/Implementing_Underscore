const _indexOf = function (arr, value, isSorted) {
    if (isSorted) {
        searchArr(arr, value);

    }
    if (!Array.isArray(arr) && typeof arr !== 'string') return -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    
}
    return -1;
    
}

function searchArr (arr, target) {
    let min = 0;
    let max = arr.length - 1;
    let guess;

    while (min <= max) {
        guess = Math.round((max + min) / 2);

        if (arr[guess] === target) {
            return guess
        }
        else if (arr[guess] < target) {
            min = guess + 1;
        }
        else {
            max - 1
        }
        return -1;
    }

}

module.exports = {
    _indexOf
};

