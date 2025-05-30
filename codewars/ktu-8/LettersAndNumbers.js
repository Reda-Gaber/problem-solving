let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o']

// Elzero

let text = mix
  .map(ele => (typeof ele !== 'number' ? ele : ''))
  .reduce((acc, val) => acc + val)

console.log(text) // Elzero
