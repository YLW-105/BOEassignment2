const isRightTriangle = (a, b, c) => {
  return  (a + b > c || a + c > b || b + c > a) &&
          (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
          Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) ||
          Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2));
}

module.exports = isRightTriangle;
console.log(isRightTriangle(0, 0, 0));
