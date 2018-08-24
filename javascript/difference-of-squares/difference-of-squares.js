export default class Square {
  constructor(num) {
    this.num = num
    this.n = Array.from(Array(this.num), (e, i) => i + 1)
  }


  get difference() {
    return this.squareOfSums - this.sumOfSquares
  }

  get sumOfSquares() {
   return this.n.reduce((acc, curr) => acc + Math.pow(curr, 2)) 
  }

  get squareOfSums() {
    const y =  this.n.reduce((acc, curr) => acc + curr)
    return Math.pow(y, 2)
  }
}

