const removeFromArray = function(array, ...remove) {
    let answer = []
    for (let i = 0; i < array.length; i++) {
        if (!remove.includes(array[i])) {
            answer.push(array[i])
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
