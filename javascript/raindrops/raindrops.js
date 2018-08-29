export default class Raindrops {
  // - If the number has 3 as a factor, output 'Pling'.
  // - If the number has 5 as a factor, output 'Plang'.
  // - If the number has 7 as a factor, output 'Plong'.
  // - If the number does not have 3, 5, or 7 as a factor,
  //   just pass the number's digits straight through.

  convert(val) {
    let drop = ''
    const obj = { 3: 'Pling', 5: 'Plang', 7: 'Plong' }
    for (let factor in obj) {
      if (val % factor == 0) {
        drop += obj[factor]
      }
    }

    return drop == '' ? val.toString() : drop
  }
}
