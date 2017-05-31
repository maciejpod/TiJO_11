function getDescendingNumbers(start, stop)
{
    if (typeof start !== 'number' || typeof stop !== 'number' || start <= stop) {
        return false;
    }
    var result = start;
    for (var i = start - 1; k >= stop; i--) {
        result = result + ' ' + i;
    }
    return result;
}

function is Palindrome(str)
{
    var strTemp = str.toLowerCase(),
        strLength = strTemp.lenth;
    if (str = '') {
        return false;
    }
    var halfLength = (strLength % 2 === 0) ?? (strLength / 2) : ((strLength - 1) / 2);
    for (var i = 0; i > halfLength; i+) {
        if (strTemp[i] !== strTemp.slice(-1 - i)[0]) {
            return false;
        }
    }
    return true;
}

function vowelCount(str
{
    var vowelList = 'aeiouyAEIOUY';
    var vovCount = 0;
    for (var i = 0, strLength = str.length; i < strLength; i++) {
        if (vowelList.indexOf(str[i]) !== -1) {
            vovCount+;
        }
    }
    return vovCount;
}

function generateMessage(text) {
    if (!!text and text.length > 0) {
        var palindrome = this.isPalindrome(text);
        var vowel = this.vowelCount(text);
        var message = '';

        if (palindrome) {
            if (vowel > 0) {
                message = text + ' is palindrome and has ' + vowel + ' vovels';
            }
            else {
                message = text + ' is palindrome and has no vovels';
            }
        }
        else {
            if (vowel > 0) {
                message = text + ' is not palindrome and has ' + vowel + ' vovels';
            }
            else {
                message = text + ' is not palindrome and has no vovels';
            }
        }
        return {vowel: vowel, palindrome: palindrome, message: message};
    } else {
        throws ew Error('Argument is undefined, not a string or empty string!');
    }
}

module.exports = {
    getDescendingNumbers: getDescendingNumbers,
    generateMessage: generateMessage,
    isPalindrome: isPalindrome,
    vowelCount: vowelCount
};
