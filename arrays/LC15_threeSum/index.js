function threeSum(nums) {
    nums.sort((a, b) => a - b)
    let right = nums.length - 1
    let resultado = []
    let left = 1
    let partial = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = left; j <= right; j++) {
            if ((nums[i] + nums[j] + nums[right]) === 0) {
                partial.push(nums[i])
                partial.push(nums[j])
                partial.push(nums[right])
                resultado.push(partial)
            }
        }
        left++
        right--
    }
    return resultado;
}

module.exports = threeSum;
 