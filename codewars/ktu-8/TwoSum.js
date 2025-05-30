/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
*/

var twoSum = function (nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        result.push(i, j)
      }
    }
    if (result.length === 2) break
  }
  return result
}

console.log(twoSum([7, 11, 2, 15], 9)) // [0,2]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([3, 3], 6)) // [0,1]
console.log(twoSum([3, 2, 3], 6)) // [0,2]
