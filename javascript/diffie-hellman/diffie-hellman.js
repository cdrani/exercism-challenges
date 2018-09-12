export default class DiffieHellman {
  constructor(p, g) {
    this.goodArgs(p, g)
    this.p = p
    this.g = g
  }

  goodArgs(p, g) {
    if (!(1 <= p && p < 9999) || !(1 <= g && g < 9999))
      throw new Error('Arguments are out of range')
    else if (!this.isPrime(p) || !this.isPrime(g))
      throw new Error('Arguments are not prime')
  }

  isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false
    return num !== 1
  }

  badKeys(num) {
    if (num <= 1 || num >= this.p) {
      return true
    }
    return false
  }

  getPublicKeyFromPrivateKey(num) {
    if (this.badKeys(num)) {
      throw new Error()
    }
    return this.g ** num % this.p
  }

  getSharedSecret(privKey, pubKey) {
    return pubKey ** privKey % this.p
  }
}
