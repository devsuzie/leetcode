var MyQueue = function () {
  this.stackOne = []
  this.stackTwo = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackOne.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.stackTwo.length) {
    while (this.stackOne.length) this.stackTwo.push(this.stackOne.pop())
  }
  return this.stackTwo.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.stackTwo.length) return this.stackOne[0]
  return this.stackTwo[this.stackTwo.length - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stackTwo.length && !this.stackOne.length
}
