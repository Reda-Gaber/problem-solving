function specialMix (...data) {
  let result = data.filter(function (item) {
    let newResult = item.split('').filter(function (c) {
      return parseInt(isNaN(c))
    })
  })
}
// 10Testing => [1, 0, t, e, s, t, i, n, g]
console.log(specialMix(10, 20, 30)) // 60
console.log(specialMix('10Test', 'Testing', '20Cool')) // 30
console.log(specialMix('Testing', '10Testing', '40Cool')) // 50
console.log(specialMix('Test', 'Cool', 'Test')) // All Is Strings
