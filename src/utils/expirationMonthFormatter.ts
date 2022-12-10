export const expirationMonthFormatter = (num: number) => {
  if (num <= 9 && num > 0) {
    return `0${num}`
  }
  return num
}
