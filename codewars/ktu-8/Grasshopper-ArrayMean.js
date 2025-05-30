var findAverage = function (nums) {
  let sum = 0, i = 0;
  for (; i < nums.length; i++)
    sum += nums[i];

  return sum / i;
}