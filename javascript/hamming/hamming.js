export default class Hamming {
  compute(strand1, strand2) {
    if (strand1.length != strand2.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    if (strand1 == strand2) {
      return 0
    }

    const diff = strand1.split('').filter((dna, i) => dna != strand2[i])
    return diff.length
  }
}
