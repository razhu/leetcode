function twoSum(nums, target) {
    let sw = {}
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        let requiredNumber = target - element
        if (sw[requiredNumber] !== undefined) {
            return [i, sw[requiredNumber]]
        } else {
            sw[element] = i
        }
    }
}

module.exports = twoSum;
