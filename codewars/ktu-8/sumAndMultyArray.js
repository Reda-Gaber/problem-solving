let nums = [2, 12, 11, 5, 10, 1, 99]

let sum = nums.reduce((acc, value) => {
  if (value % 2 === 0) return acc * value
  else return acc + value
})

console.log(sum)
