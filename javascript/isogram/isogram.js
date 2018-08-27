export default class Isogram {
  constructor(str) {
    this.str = str.toLowerCase().replace(/[^a-z]/g, '')
  }

  isIsogram() {
    if (!this.str) {
      return true
    }

    const set = new Set(this.str)
    return set.size == this.str.length
  }
}
