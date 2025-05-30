/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const match = s.match(/^\s*[-+]?\d+/);
  
  if (!match) return 0;

  let num = Number(match[0]);

  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (num < INT_MIN) return INT_MIN;
  if (num > INT_MAX) return INT_MAX;

  return num;
};


console.log(myAtoi("  -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("42"));


let n = "4193 with words";

let re = new RegExp(/[0-9]/g);

let res = n.match(re);

console.log(res);