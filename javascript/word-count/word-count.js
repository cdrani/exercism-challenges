export default class Words {
  count(words) {
    const obj = {}
    words
      .toLowerCase()
      .trim()
      .replace(/[\t\n]+/g, ' ')
      .split(' ')
      .filter(x => x !== '')
      .forEach(word => {
        if (word == 'constructor' || !obj[word]) {
          obj[word] = 1
        } else {
          obj[word] += 1
        }
      })
    return obj
  }
}
