export const validate = num => {
  const numStringArray = num.toString().split('')
  if (numStringArray.length == 1) {
    return true
  }

  const numArray = toNum(numStringArray)
  return reduceNum(numArray) == num
}

const toNum = arr => arr.map(x => Number(x))
const reduceNum = arr =>
  arr.reduce((acc, val) => acc + Math.pow(val, arr.length), 0)
