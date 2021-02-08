function groupAnagrams(strs) {
    let sorted = {}
    for (let index = 0; index < strs.length; index++) {
        const element = strs[index];
        let key1 = element.split('').sort().join('');
        if (!sorted[key1]) {
            sorted[key1] = []
        }
        sorted[key1].push(strs[index])
    }
    return Object.values(sorted)
}

module.exports = groupAnagrams;
