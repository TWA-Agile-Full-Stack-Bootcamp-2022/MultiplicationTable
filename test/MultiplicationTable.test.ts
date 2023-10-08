import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  describe('should return the result of start num is greater or not than the end number', () => {
    it('start number equals end number', () => {
      // given
      const table = new MultiplicationTable()
      const start = 1
      const end = 1
      //when
      const result = table.isGreaterThan(start, end)
      //then
      expect(result).toBe(false)
    })
    it('start number less than end number', () => {
      // given
      const table = new MultiplicationTable()
      const start = 1
      const end = 2
      //when
      const result = table.isGreaterThan(start, end)
      //then
      expect(result).toBe(false)
    })

    it('start number greater than end number', () => {
      // given
      const table = new MultiplicationTable()
      const start = 2
      const end = 1
      //when
      const result = table.isGreaterThan(start, end)
      //then
      expect(result).toBe(true)
    })
  })
})
