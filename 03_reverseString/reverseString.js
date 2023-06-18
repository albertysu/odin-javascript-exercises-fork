const reverseString = function(word) {
    let answer = ""
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word.substring(i, word.length - i + 1))
        answer += word.substring(i, i + 1)
    }
    return answer
};

// Do not edit below this line
module.exports = reverseString;
