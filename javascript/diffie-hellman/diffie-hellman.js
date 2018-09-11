export default class DiffieHellman {
  constructor(p, g) {
    this.p = p
    this.g = g
    this.a = ''
    this.b = ''
    this.A = ''
    this.B = ''
    this.sA = ''
    this.sB = ''
  }


  isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
      return num !== 1;
  }


  goodArgs() {
    if (this.p >= 0 && this.g >= 0) {
      if(!this.isPrime(this.p) && !this.isPrime(this.g)) {
        throw new Error()
      }
    }
  }

  getPublicKeyFromPrivateKey(num) {
    if (badKeys(num)) {
      throw new Error()
    }
    return (this.g ** num) %  this.p
  }

  randomNum(num) {
    return Math.floor(Math.random() * (num - 1 + 1) + 1)
  }

  // this.goodArgs()

  badKeys(num) {
    if (num <= 1 || num >= this.p) {
      return true
    }
    return false
  }

  privateKeyGen(num) {
   this.a = this.randomNum(this.p) 
   this.b = this.randomNum(this.p) 
   this.A = this.getPublicKeyFromPrivateKey(this.a)
   this.B = this.getPublicKeyFromPrivateKey(this.b)
    this.sA = this.secretKeyGen(this.B, this.a)
    this.sB = this.secretKeyGen(this.A, this.b)
  }

  privateKeyGen(this.p)

  getSharedSecret(num1, num2) {
     return  (num1 ** num2) % this.p
  }
} 
