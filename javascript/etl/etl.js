const transform = obj => {
  const result = {}
  for (let key in obj) {
    obj[key].forEach(el => {
      result[el.toLowerCase()] = Number(key)
    });
  }
  return result
}

export default transform;