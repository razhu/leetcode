function isAnagram(s, t) {
    let x = false
    s.split('').sort().join('') === t.split('').sort().join('') ? x = true : x = false
    return x
}

module.exports = isAnagram;
