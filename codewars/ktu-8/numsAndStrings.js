let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C']

let swapNums = numsAndStrings
  .filter(el => (!isNaN(el) ? el : ''))
  .map(el => -el)

console.log(swapNums)
