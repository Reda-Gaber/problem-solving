let myString = 'EElllzzzzzzzeroo'

// Elzero

let finalText = myString
  .split('')
  .filter((el, i, arr) => (arr[i] !== arr[i + 1] ? el : ''))
  .join('')

console.log(finalText)
