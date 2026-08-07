export function getWeekNumber(date = new Date()) {
  // Copy date so the original remains unchanged
  const currentDate = new Date(Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ))

  // Set to nearest Thursday; treat Sunday as day 7
  currentDate.setUTCDate(
    currentDate.getUTCDate() + 4 - (currentDate.getUTCDay() || 7)
  )

  // Calculate the ISO calendar week
  const yearStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 1))

  return Math.ceil(
    (((currentDate - yearStart) / 86_400_000) + 1) / 7
  )
}

export default getWeekNumber