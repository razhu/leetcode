function isPalindrome(s) {
    let resultado = true;
    const rule = /^[a-z0-9]+$/i
    let nuevo = s.split(' ').join('').toLowerCase().split('').filter(c => rule.test(c)).join('')
    console.log('adsf  ', nuevo);
    let left = 0
    let rigth = nuevo.length - 1;
    while(left < rigth) {
console.log(' left ', nuevo[left]);
console.log(' right ', nuevo[rigth]);
        if (nuevo[left] !== nuevo[rigth]) {
            return false
        }
        left++
        rigth++
    }
    return true
}

module.exports = isPalindrome;
