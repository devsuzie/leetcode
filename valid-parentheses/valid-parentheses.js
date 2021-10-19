/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []

  for (let element of s) {
    if (element === '(' || element === '[' || element === '{') {
      stack.push(element)
    }

    if (stack.length === 0) return false

    let lastElement

    switch (element) {
      case ')':
        lastElement = stack.pop()
        if (lastElement === '{' || lastElement === '[') return false
        break

      case '}':
        lastElement = stack.pop()
        if (lastElement === '(' || lastElement === '[') return false
        break

      case ']':
        lastElement = stack.pop()
        if (lastElement === '(' || lastElement === '{') return false
        break
    }
  }

  return stack.length == 0
}
