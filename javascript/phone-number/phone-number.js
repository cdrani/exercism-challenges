export default class PhoneNumber {
  constructor(num) {
    this.num = num;
  }

  number() {
    if (this.num.match(/[A-Za-z]+/g) || this.num.length < 10) {
      return null
    }
    this.num = this.num.replace(/\D+/g, '')
    let length = this.num.length
    if (length === 10) {
      return this.num
    } else if (length === 11 && this.num[0] === '1') {
      return this.num.substring(1)
    } else {
      return null
    }
  }
}