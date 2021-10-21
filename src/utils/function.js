let months = [
  'January',
  'Febnuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Cotober',
  'November',
  'December'
]

const getDay = (date) => {
  let dateType = new Date(date);
  return months[dateType.getMonth()] + ", " + dateType.getDate() + " " + dateType.getFullYear()
}

export { getDay }