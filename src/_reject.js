const _reject = function (list, predicate, context) {
    let result = [];
    if (context) predicate = predicate.bind(context)
    if (Array.isArray(list) || typeof list === 'string') {
        for (var i = 0; i < list.length; i++) {
            if (!predicate(list[i])) result.push(list[i]);
        }
    } else {
        for (let key in list) {
            if (!predicate(list[key])) {
                result.push(list[key])
            }

        }
    }
    return result;

};

module.exports = {
    _reject
};