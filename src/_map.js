const _map = function (list, iteratee, context) {
    if (!iteratee) return list;
    if (typeof list === 'number') return [];
    if (context) iteratee = iteratee.bind(context);
    let result = [];
    if (typeof list === 'string' || Array.isArray(list))
    for (let i = 0; i < list.length; i++) {
        result.push(iteratee(list[i], i, list));
    } else {
        for (let key in list) {
            result.push(iteratee(list[key], key, list))
        }
    }
    return result;
   

};

module.exports = {
    _map
};