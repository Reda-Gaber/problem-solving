/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

  let arr = [];
  for (let i = 0; i < s.length; i++){ // "MCMXCIV" ==> 1994
    if (s[i] === 'I') arr.push(1);
    if (s[i] === "V") arr.push(5);
    if (s[i] === "X") arr.push(10);
    if (s[i] === 'L') arr.push(50);
    if (s[i] === 'C') arr.push(100);
    if (s[i] === 'D') arr.push(500);
    if (s[i] === 'M') arr.push(1000);
  }

  let sum = 0; 
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < arr[i + 1]) {
      sum += (arr[i + 1] - arr[i]);
      i++;
    } else {
      sum += arr[i];
    }
  }

  return sum;
};


console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));