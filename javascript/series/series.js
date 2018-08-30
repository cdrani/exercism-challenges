export default class Series {
  constructor(num) {
    this.num = num
  }

  get digits() {
    return this.num.split('').map(digit => Number(digit))
  }

  slices(n) {
    let numArr = this.digits
    if (n > numArr.length) {
      throw new Error('Slice size is too big.')
    }
    let arr = []
    for (let i = 0; i <= numArr.length - n; i++) {
      arr.push(numArr.slice(i, i + n))
    }
    return arr
  }
}