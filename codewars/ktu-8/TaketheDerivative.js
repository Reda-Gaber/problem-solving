function derive(coefficient,exponent) {
  let sum = coefficient * exponent;
  return `${sum}x^${exponent -1}`;
}