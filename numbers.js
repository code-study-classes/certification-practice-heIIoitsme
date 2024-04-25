//1
function calculateDistance(x1, x2) {
    return Math.abs(x2 - x1);
  }
  
  console.log(calculateDistance(3, 7));
  
/2
  function calculateSegmentProduct(A, B, C) {
    return Math.abs((A-C)*(B-C));
  }
  
  console.log(calculateSegmentProduct(0, 5, 2));
  
//3
  function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
  }
  
  console.log(calculateKilobytes(5000));
  
//4
  function calculateSegments(lengthA, lengthB) {
    return Math.floor(lengthA/lengthB);
  }
  
  console.log(calculateSegments(10, 3))
  
//5
  function calculateDigitSum(twoDigitNumber) {
    let first_num = Math.floor(twoDigitNumber % 10)
    let second_num = Math.floor(twoDigitNumber / 10)
    return Math.abs(first_num + second_num);
  }
  
  console.log(calculateDigitSum(47));
 
//6
  function swapHundredsAndTens(treeDigitNumber) {
    let num_A = Math.floor(treeDigitNumber / 100)
    let num_B = Math.floor((treeDigitNumber / 10) % 10)
    let num_C = Math.floor(treeDigitNumber % 10)
    return Math.abs(num_B * 100 + num_A * 10 + num_C);
  }
  console.log(swapHundredsAndTens(123));
  
//7
  function getHundredsDigit(number) {
    if (number > 0);
      return Math.floor(number / 100 % 10);
  }
  console.log(getHundredsDigit(1234));
  
//8
  function getFullHours(seconds) {
  return Math.floor(seconds / 60 / 60);
  }
  console.log(getFullHours(3600));
  
//9 
  function getDayOfWeek(dayOFYear) {
  let firstDay = 1
  let weekDay = (firstDay + dayOFYear - 1) % 7
  return (weekDay);
  }
  console.log(getDayOfWeek(365));
  
//10
  function countSquares(A, B, C) {
  let x = Math.floor(A / C)
  let y = Math.floor(B / C)
  return Math.floor( x * y);
  }
  console.log(countSquares(10, 10, 5));
  export { calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum,  swapHundredsAndTens, getHundredsDigit, getFullHours, getDayOfWeek, countSquares };
