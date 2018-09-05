const toRoman = num => {
  const numerals = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]

  let i = 0
  let result = ''
  while (num > 0) {
    if (num >= numerals[i][0]) {
      num -= numerals[i][0]
      result += numerals[i][1]
    } else i++
  }
  return result
}

export default toRoman
