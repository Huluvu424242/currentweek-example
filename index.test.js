import getWeekNumber from './index.js'

describe('getWeekNumber', () => {
  test('is exported as a function', () => {
    expect(getWeekNumber).toBeInstanceOf(Function)
  })

  test('returns a number for the current date', () => {
    expect(getWeekNumber()).toEqual(expect.any(Number))
  })

  test('returns ISO week 32 for 07.08.2026', () => {
    const date = new Date(2026, 7, 7)
    expect(getWeekNumber(date)).toBe(32)
  })
})
