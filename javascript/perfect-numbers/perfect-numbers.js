export default class PerfectNumbers {
  classify(num) {
    if (num <= 0) {
      throw new Error('Classification is only possible for natural numbers.')
    }

    if (num == 1) {
      return 'deficient'
    }

    const factors = [1]
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        factors.push(i)
      }
    }

    const factorsSum = factors.reduce((acc, val) => acc + val)

    return num == factorsSum
      ? 'perfect'
      : num > factorsSum
        ? 'deficient'
        : 'abundant'
  }
}
