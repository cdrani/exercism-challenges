export function steps(num) {
  if (num <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  let acc = 0;
  if (num === 1) {
    return acc
  }

  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2
      acc += 1
    } else {
      num = num * 3 + 1
      acc += 1
    }
  }
  return acc
}