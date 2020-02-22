function comma (number, currency) {
  let result = 0

  if (number && !isNaN(number)) {
    const splitNumbers = number.toString().split('.')
    result = splitNumbers[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (splitNumbers[1] ? '.' + splitNumbers[1] : '')
  }
  
  return result
}

export default comma
