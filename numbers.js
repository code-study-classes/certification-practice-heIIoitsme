1
function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}

console.log(calculateDistance(3, 7));

// ---------------------------------------------

2
function calculateSegmentProduct(x1, x2, x3) {
  return Math.abs((x3 - x1) * (x3 - x2));
}

console.log(calculateSegmentProduct(0, 5, 2));

// ----------------------------------------------

3
function calculateKilobytes(x) {
  return Math.floor(x / 1024);
}

console.log(calculateKilobytes(4000));

// ----------------------------------------------

4
function calculateSegment(x1, x2) {
  return Math.floor(x1 / x2);
}

console.log(calculateKilobytes(10, 3));

//-----------------------------------------------

5
function calculateDigitSum(x1) {
  return Math.floor((x1 / 10) + (x1 % 10));
}
console.log(calculateDigitSum(63));

//-----------------------------------------------

6
function swapHundredsAndTens(x1) {
  return Math.floor(x1 % 100 / 10) * 100 + Math.floor(x1 / 100) * 10 + Math.floor(x1 % 10);
}
console.log(swapHundredsAndTens(913));

export {
  calculateDigitSum, 
  calculateSegment, 
  calculateDistance, 
  calculateKilobytes, 
  calculateSegmentProduct, 
  swapHundredsAndTens,
};

7
function getHundredsDigit(number) {
  if (number>999);
  return Math.floor(number/100) % 10;
}

console.log(getHundredsDigit(1000))
console.log(getHundredsDigit(-999))
export{getHundredsDigit}

8
function getFullHours(seconds){
  let hours = Math.floor(seco+nds/
3600);
return hours;
}
module.exports = getFullHourse;