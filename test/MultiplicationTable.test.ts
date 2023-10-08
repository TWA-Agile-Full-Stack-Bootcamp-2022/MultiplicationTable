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

  describe('Verify start number is greater than end number', () => {
    it('should return false given start number equals end number', () => {
      // given
      const table = new MultiplicationTable()
      const start = 1
      const end = 1
      //when
      const result = table.isGreaterThan(start, end)
      //then
      expect(result).toBe(false)
    })
    it('should return false given start number less than end number', () => {
      // given
      const table = new MultiplicationTable()
      const start = 1
      const end = 2
      //when
      const result = table.isGreaterThan(start, end)
      //then
      expect(result).toBe(false)
    })

    it('should return true given start number greater than end number', () => {
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
