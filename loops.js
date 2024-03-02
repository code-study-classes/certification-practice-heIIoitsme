// 1 ---------------------------------
function sumOfSquares(a, b){
  let sum = 0;
  for (let i = a; i <= b; i++){
    sum += i * i;
  }
  return sum;
}
console.log(sumOfSquares(2, 5))

// 2 ---------------------------------
function power(a, n){
  let sum = 1;
  for (let i = 0; i < n; i++){
    sum *= a;
  }
  return sum;
}
console.log(power(2, 3))

// 3 ---------------------------------
function factorialProduct(a){
  let sum = 1;
  for (let i = 1; i <= a; i++){
    sum *= i;
  }
  return sum;
}
console.log(factorialProduct(3))

// 4 ---------------------------------
function fibonacciSequence(n){
  let sum = 1;
  let k = 1;
  for (let i = 2; i <= n; i++){
    let l = sum+k;
    sum = k
    k = l
  }
  return sum;
}
console.log(fibonacciSequence(5))

// 5 ---------------------------------
function sumOfPowers(n){
  let sum = 0;
  for (let i = 1; i <= n; i++){
      sum += Math.pow(i, i);
  }
  return sum;
}
console.log(sumOfPowers(3))

// 6 ---------------------------------
function sumOfSquares(a, b){
  let sum = 0;
  for (let i = a; i <= b; i++){
    sum += i * i;
  }
  return sum;
}
console.log(sumOfSquares(2, 5))

// 7 ---------------------------------
function sumOfSquares(a, b){
  let sum = 0;
  for (let i = a; i <= b; i++){
    sum += i * i;
  }
  return sum;
}
console.log(sumOfSquares(2, 5))

// 8 ---------------------------------
function sumOfSquares(a, b){
  let sum = 0;
  for (let i = a; i <= b; i++){
    sum += i * i;
  }
  return sum;
}
console.log(sumOfSquares(2, 5))

// 9 ---------------------------------
function sumOfSquares(a, b){
  let sum = 0;
  for (let i = a; i <= b; i++){
    sum += i * i;
  }
  return sum;
}
console.log(sumOfSquares(2, 5))

// 10 ---------------------------------
function sumOfSquares(a, b){
  let sum = 0;
  for (let i = a; i <= b; i++){
    sum += i * i;
  }
  return sum;
}
console.log(sumOfSquares(2, 5))
