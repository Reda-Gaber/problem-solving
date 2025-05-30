/*
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

let isPalindrome = function (x) {
  let pram = x.toString().split('')
  console.log(pram)

  for (let i = 0; i < Math.ceil(pram.length / 2); i++) {
    if (pram[i] !== pram[pram.length - 1 - i]) return false
  }

  return true
}

console.log(isPalindrome(1234554321))
console.log(isPalindrome(-121))
console.log(isPalindrome(121))
console.log(isPalindrome(121121))
console.log(isPalindrome(12))
