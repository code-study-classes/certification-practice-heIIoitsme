// 1 -------------------------------------------
function inPositive(x1) {
    return Boolean(x1 > 0)
}
console.log(inPositive(-1))

// 2 -------------------------------------------
function isOdd(x1) {
    return Boolean(x1 % 2 != 1 & x1 % 2 != -1)
}
console.log(isOdd(3))

// 3 -------------------------------------------
function checkInequality(x1, x2) {
    return Boolean(x1 > 2 & x2 <=3)
}
console.log(checkInequality(4, 3))

// 4 -------------------------------------------
function checkInequality2(x1, x2) {
    return Boolean(x1 >= 0 & x2 <= -2)
}
console.log(checkInequality2(-1, -2))

// 5 -------------------------------------------
function checkBetweenNumbers(x1, x2, x3) {
    return Boolean(x1 < x2 & x2 < x3)
}
console.log(checkBetweenNumbers(5, 5, 8))

// 6 -------------------------------------------
function checkOddThreeDigitNumber(x1) {
    return Boolean(x1 / 100 >= 1 & x1 % 2 == 1 & x1 % 2 == -1)
}
console.log(checkOddThreeDigitNumber(-789))

// 7 -------------------------------------------
function checkUniqeDigits(x1) {
    return Boolean(x1 / 100 != x1 % 10 && x1 % 10 != x1 % 100 / 10 & x1/100 != x1 % 100 / 10)
}
console.log(checkUniqeDigits(122))

// 8 -------------------------------------------
function checkInequality(x1, x2) {
    return checkInequality = Boolean(x1 > 2 & x2 <=3)
}
console.log(checkInequality(4, 3))

// 9 -------------------------------------------
function checkInequality(x1, x2) {
    return checkInequality = Boolean(x1 > 2 & x2 <=3)
}
console.log(checkInequality(4, 3))

// 10 -------------------------------------------
function checkInequality(x1, x2) {
    return checkInequality = Boolean(x1 > 2 & x2 <=3)
}
console.log(checkInequality(4, 3))

