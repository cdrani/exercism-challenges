export default class Transcriptor {
  toRna(dna) {
    const decoder = { G: 'C', C: 'G', T: 'A', A: 'U' }

    if (dna.match(/[^GCTA]/g) != null) {
      throw new Error('Invalid input DNA.')
    }

    let decoded = ''

    for (let i = 0; i < dna.length; i++) {
      decoded += decoder[dna[i]]
    }

    return decoded
  }
}
