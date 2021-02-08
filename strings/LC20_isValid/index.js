function isValid(array) {
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    let pila = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (pairs[element]) {
            pila.push(element)
        } else {
            element === pila[pila.length - 1] ? pila.pop() : pila.push(element)
        }
    }
    return pila.length === 0

}

module.exports = isValid;
