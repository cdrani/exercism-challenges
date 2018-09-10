class Acronyms {
  static parse(str) {
    let arr = str.match(/([\w+\b])+/g);
    let result = '';
    for (let word of arr) {
      word = word.slice(0, 1).toUpperCase() + word.slice(1)
      if (!(word[0] === word[0].toUpperCase() && word[1] === word[1].toUpperCase())) {
        let letterArr = word.match(/[A-Z]+/g)
        result += letterArr.join('')
      } else {
        result += word[0];
      }
    }
    return result;
  }
}

export default Acronyms;