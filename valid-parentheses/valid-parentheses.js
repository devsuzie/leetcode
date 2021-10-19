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

    switch (element) {
      case ')':
        if (stack.pop() !== '(') return false
        break

      case '}':
        if (stack.pop() !== '{') return false
        break

      case ']':
        if (stack.pop() !== '[') return false
        break
    }
  }

  return stack.length == 0
}
