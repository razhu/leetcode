function lengthOfLongestSubstring(s) {
    let slidingWindow = {};
    let windowStart = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        const endCharacter = s[i];

        if (slidingWindow[endCharacter] >= windowStart) {
            windowStart = slidingWindow[endCharacter] + 1;
        }
        slidingWindow[endCharacter] = i
        maxLength = Math.max(maxLength, i - windowStart + 1)
    }
    return maxLength
}

module.exports = lengthOfLongestSubstring;
