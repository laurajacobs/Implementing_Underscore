const _each = function (list, iteratee, context) {
    if (context) iteratee = iteratee.bind(context);
    if (Array.isArray(list || typeof list === 'string')) {
        for (var i = 0; i < list.length; i++){
            iteratee(list[i], i, list);
        }
    }
    else {
        for (let key in list) {
            iteratee(list[key], key, list);
        }
    }

    
};

module.exports = {
    _each
};