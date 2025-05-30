// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

var lengthOfLastWord = function (s) {
  let result = s.trim().split(' ')
  let lastWord = result[result.length - 1]

  return lastWord.length
}

console.log(lengthOfLastWord('Hello World  '))
