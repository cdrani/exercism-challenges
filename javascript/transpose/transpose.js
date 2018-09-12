const transpose = arr => {
  if (!arr.length || arr.length == 1) {
    return !arr.length ? arr : arr[0].split('')
  }
  let newArr = []
  let arrSlice = arr.slice(1)
  const longer = arr.sort((a, b) => b.length - a.length).length

  if (arr.length == 2) {
    for (let i = 0; i < arr[longer].length; i++) {
      if (arr[0].length != arr[1].length) {
        if (!arr[1][i]) {
          newArr.push(`${arr[0][i]}`)
        } else if (!arr[0][i]) {
          newArr.push(` ${arr[1][i]}`)
        } else {
          newArr.push(`${arr[0][i]}${arr[1][i]}`)
        }
      } else {
        newArr.push(`${arr[0][i]}${arr[1][i]}`)
      }
    }
    return newArr
  }

  for (let i = 0; i < longer; i++) {
    console.log('longer', longer)
    let str = ''
    if (arr[0][i] == undefined) {
      str += ' '
    }

    for (let j = 0; j < arrSlice.length; j++) {
      if (arrSlice[j][i] == undefined) {
        str += ' '
      } else {
        str += arrSlice[j][i]
      }
    }
    newArr.push(`${arr[0][i]}${str}`)
  }

  return newArr
}

export default transpose
