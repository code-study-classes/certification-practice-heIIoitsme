function calculateDistance(x1, x2) {
    return Math.abs(x2-x1);
}

console.log(calculateDistance(3, 7));
export {calculateDistance}

// ---------------------------------------------

function calculateSegmentProduct(x1, x2, x3) {
    return Math.abs((x2-x1)*(x3-x2))
}

console.log(calculateSegmentProduct(3, 7, 12))

// ----------------------------------------------

function calculateKilobytes(x) {
    return Math.floor(x / 1024)    
}

console.log(calculateKilobytes(4000))

// ----------------------------------------------

function calculateSegment(x1, x2){
    return Math.abs(x1 / x2)
}

console.log(calculateKilobytes(17, 3))

//-----------------------------------------------

function calculateDigitSum(x1){
    return Math.floor((x1 / 10) + (x1 % 10))
}
console.log(calculateDigitSum(63))

//-----------------------------------------------

function swapHundredsAndTens(x1){
    return Math.floor(x1 % 100 / 10)*100 + Math.floor(x1 / 100)*10 + Math.floor(x1 % 10)
}
console.log(swapHundredsAndTens(913))

export{calculateDigitSum, calculateSegment, calculateDistance, calculateKilobytes, calculateSegmentProduct, swapHundredsAndTens}