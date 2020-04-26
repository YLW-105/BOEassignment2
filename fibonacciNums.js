const fibonacciNums = (n) => {
  if (n < 1){
    return [];
  }
  const fib = [0, 1];
  for (let i = 2; i < n; i++){
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

module.exports = fibonacciNums;
console.log(fibonacciNums(4));
