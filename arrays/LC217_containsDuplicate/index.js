/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplisObj = {}
    let counter = 0
    let duplis = false
    
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if (duplisObj[element]) {return true}
        else {
        duplisObj[element] = true    
        }
        
    }
    return false
};    