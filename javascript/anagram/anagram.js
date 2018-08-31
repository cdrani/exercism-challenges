export default class Anagram {
  constructor(word) {
    this.word = word
  }

  letters(str) {
    let obj = {}
    str.toLowerCase().split('').forEach((letter) => {
      if (!obj[letter]) {
        obj[letter] = 1
      } else {
        obj[letter] += 1
      }
    });
    return obj;
  }

  isAnagram(obj1, obj2) {
    if (!((Object.keys(obj1).length) === (Object.keys(obj2).length))) {
      return false;
    }
    for (let k in obj1) {
      if (!((obj2.hasOwnProperty(k)) && (obj1[k] === obj2[k]))) {
        return false;
      }
    }
    return true;
  }

  matches(arr) {
    const myWord = this.letters(this.word)
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (this.word.toLowerCase() === arr[i].toLowerCase()) {
        continue;
      }
      let currentWord = this.letters(arr[i].toLowerCase());
      if (this.isAnagram(myWord, currentWord)) {
        result.push(arr[i])
      }
    }
    return result;
  }
}