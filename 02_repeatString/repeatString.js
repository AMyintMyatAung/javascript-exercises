const repeatString = function(word, times) {
    if(times < 0) {
        return 'ERROR'
    }
    let repeatedWord = '';
    while(times > 0) {
        repeatedWord += word;
        times--;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
