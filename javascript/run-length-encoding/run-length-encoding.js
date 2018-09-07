const encode = str => {
  if (!str) {
    return ''
  }

  const dict = dictArr(str)
  let encodedStr = ''

  dict.forEach(el => {
    if (el[1] == 1) {
      encodedStr += el[0]
    } else {
      encodedStr += `${el[1]}${el[0]}`
    }
  })

  return encodedStr
}

const dictArr = str => {
  const dict = []
  let i = 0
  let currentIndex = 0
  let nextIndex = 1

  while (nextIndex <= str.length) {
    dict.push([str[i], 1])
    while (str[i] == str[nextIndex] && nextIndex < str.length) {
      dict[currentIndex][1]++
      nextIndex++
    }

    currentIndex++
    i = nextIndex
    nextIndex++
  }
  return dict
}

const decode = str => {
  if (!str) {
    return ''
  }

  if (str.match(/\d/g) == null) {
    return str
  }
  const matches = str.match(/(\d*\S)/g)

  let decodedStr = ''
  matches.forEach(el => {
    if (el.length > 1) {
      let repeatStr = el[el.length - 1].repeat(
        Number(el.substring(0, el.length - 1))
      )
      decodedStr += `${repeatStr}`
    } else {
      decodedStr += el
    }
  })

  return decodedStr
}

export { encode, decode }
