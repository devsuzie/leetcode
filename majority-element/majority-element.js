var majorityElement = function(nums) {
  nums.sort();
  const i = Math.floor(nums.length/2);
  return nums[i];
};
