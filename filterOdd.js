const filterOdd = (arr) => {
  const Odd = arr.filter(num => num % 2 === 1);
  return Odd;
};

module.exports = filterOdd;
console.log(filterOdd( [ 1, 2, 4, 27, 5, 6, 10 ] ));
