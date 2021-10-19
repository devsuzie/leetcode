/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(expr) {
  const stack = [];

  for (let i = 0; i < expr.length; i++) {
    const x = expr[i];

    if (x == '(' || x == '[' || x == '{') {
      stack.push(x);
      continue;
    }

    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ')':
        check = stack.pop();
        if (check == '{' || check == '[') return false;
        break;

      case '}':
        check = stack.pop();
        if (check == '(' || check == '[') return false;
        break;

      case ']':
        check = stack.pop();
        if (check == '(' || check == '{') return false;
        break;
    }
  }

  return stack.length == 0;
}