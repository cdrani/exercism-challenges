class Triangle {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }
  kind() {
    let arr = [this.x, this.y, this.z].sort((a, b) => a >= b)
    if (arr[0] <= 0 || arr[0] + arr[1] <= arr[2]) {
      throw new Error('')
    }
    const options = ['equilateral', 'isosceles', 'scalene']
    const set1 = new Set(arr);
    return options[set1.size - 1]
  }
}
export default Triangle;