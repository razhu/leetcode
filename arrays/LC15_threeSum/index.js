function threeSum(nums) {
    // nums.sort((a, b) => a - b)
    // let right = nums.length - 1
    // let resultado = []
    // let left = 1
    // let partial = []
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = left; j <= right; j++) {
    //         if ((nums[i] + nums[j] + nums[right]) === 0) {
    //             partial.push(nums[i])
    //             partial.push(nums[j])
    //             partial.push(nums[right])
    //             resultado.push(partial)
    //         }
    //     }
    //     left++
    //     right--
    // }
    // return resultado;
    nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1
    let resultado = []
    for (let i = 0; i < nums.length-1; i++) {
        let element = nums[i]
        while (left < right) {
            if (element === (nums[i] + nums[right])) {
                resultado[i].push(element)
                resultado[i].push(nums[i])
                resultado[i].push(right)
            }
        }
        left++
    }
}

module.exports = threeSum;
 