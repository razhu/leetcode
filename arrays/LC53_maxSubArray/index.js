function maxSubArray(nums) {
    // let dp = [nums[0]]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const element = nums[i];
        nums[i] = Math.max(element, element + nums[i - 1])
        max = Math.max(max, nums[i])
    }
    return max
}

module.exports = maxSubArray;
