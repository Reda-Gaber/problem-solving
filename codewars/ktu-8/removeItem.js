var removeElement = function (nums, val) {

  let newarr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      newarr.push(nums[i]);
    }
  }
  return newarr;
};

console.log(removeElement([3, 2, 2, 3], 3));