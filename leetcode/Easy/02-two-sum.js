var twoSum = function(nums, target) {
  
  let arr = []

  for (let i = 0; i < nums.length; i++) {

    // arr[i] = i;

    for (let j = i+1; j < nums.length; j++) {

      if ((nums[i] + nums[j]) === target) 
         arr = [i, j]

    }

  }

  return arr;
};


console.log(twoSum([7,11,2,15], 9))
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))