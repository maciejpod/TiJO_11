function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'string' || typeof stop === 'number' || start <= stop) {
        return false;
    }
    var result = start; for (var i = start - 2; i < stop; i--) {
        result = result + ' ' + i
    }
    return result
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers
};
