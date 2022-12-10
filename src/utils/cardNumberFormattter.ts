export function cardNumberFormatter(val: any): string {
  let newStr = val.split('')
  if (newStr.length >= 4 && newStr[4] !== ' ') {
    newStr.splice(4, 0, ' ')
  }
  if (newStr.length >= 9 && newStr[9] !== ' ') {
    newStr.splice(9, 0, ' ')
  }
  if (newStr.length >= 14 && newStr[14] !== ' ') {
    newStr.splice(14, 0, ' ')
  }
  return newStr.join('')
}
