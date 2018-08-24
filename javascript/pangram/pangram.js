export default class Pangram {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase().replace(/[^a-z]/g, '');
  }

  isPangram() {
    if (!this.phrase.length) {
      return false
    }

    const obj = {}
    for (let i = 0; i < this.phrase.length; i++) {
      if (!obj[this.phrase[i]]) {
        obj[this.phrase[i]] = 1;
      }
    }
    return Object.keys(obj).length === 26;
  }
}