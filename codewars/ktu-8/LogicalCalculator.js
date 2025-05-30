function logicalCalc (array, op) {
  if (op === 'AND') return array.includes(false) !== true
  else if (op === 'OR') return array.includes(true) === true
  else if (op === 'XOR') {
    for (let i = 0; i < array.length; i++) {
      if (array[0] !== array[i]) return true
    }

    return false
  }
}

console.log(logicalCalc([true, false], 'XOR')) // true
console.log(logicalCalc([true, true], 'XOR')) // false
console.log(logicalCalc([false, false], 'XOR')) // false

console.log(logicalCalc([false, false, true], 'OR')) // true
console.log(logicalCalc([false, false, false], 'OR')) // false

console.log(logicalCalc([false, false, true], 'AND')) // false
console.log(logicalCalc([true, true, true], 'AND')) // true
