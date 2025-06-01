/*
Description:
Write

function consecutiveOnes(nums) {}
that takes in array nums and returns the maximum consecutive 1's

For example

consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0
*/

function consecutiveOnes(nums) {

    let exCount = 0, inCount = 0;
    for (let i = 0; i < nums.length; i ++) {

        if (nums[i] == 1) {
            inCount++;
            exCount = inCount > exCount ? inCount : exCount;
        } else {
            inCount = 0;
        }
    }

    return exCount;
};

console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]));
console.log(consecutiveOnes([1, 1, 0, 0, 1]));
console.log(consecutiveOnes([0, 0, 0, 0, 0]));