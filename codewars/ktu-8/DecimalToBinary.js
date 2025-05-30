function toBinary (num) {
  let process = num * 2
  let sum = ''

  while (process > 1) {
    process /= 2
    process = Math.trunc(process)
    if (process % 2 === 0) sum += '0'
    else sum += '1'
  }

  let result = ''
  for (let i = sum.length - 1; i >= 0; i--) result += sum[i]

  return result
}

console.log(toBinary(0))
console.log(toBinary(1))
console.log(toBinary(2))
console.log(toBinary(3))
console.log(toBinary(4))
console.log(toBinary(5))
console.log(toBinary(6))
console.log(toBinary(7))
console.log(toBinary(8))
console.log(toBinary(9))
console.log(toBinary(11))
console.log(toBinary(40))
console.log(toBinary(62))
console.log(toBinary(100))
console.log(toBinary(145))
console.log(toBinary(128))
console.log(toBinary(256))
