import { sum } from '../index'

describe('sum', () => {
  test('sum of natural numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
