const sumAll = function(num1, num2) {
    let answer = 0
    if (num1 < 0 || num2 < 0 || typeof num1 != "number"|| typeof num2 != "number") {
        return "ERROR"
    }
    let start = Math.min(num1, num2)
    let end = Math.max(num1, num2)
    for (let i = start; i <= end; i++) {
        answer += i
    }
    return answer;
}

// Do not edit below this line
module.exports = sumAll;
