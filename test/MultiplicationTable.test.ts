import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {

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

  describe('Verify the number is in the range of 1 to 10', () => {
    it('should return true given the number between 1 to 10', () => {
      // given
      const table = new MultiplicationTable()
      const givenNumber = 2
      //when
      const result = table.inRangeOfTen(givenNumber)
      //then
      expect(result).toBe(true)
    })

    it('should return false given the number less than 1', () => {
      // given
      const table = new MultiplicationTable()
      const givenNumber = 0
      //when
      const result = table.inRangeOfTen(givenNumber)
      //then
      expect(result).toBe(false)
    })

    it('should return false given the number greater than 10', () => {
      // given
      const table = new MultiplicationTable()
      const givenNumber = 11
      //when
      const result = table.inRangeOfTen(givenNumber)
      //then
      expect(result).toBe(false)
    })
  })

  describe('Verify Input values', () => {
    it('should return true when start number is not greater than end number and all number is in range of 1 to 10', () => {
      // given
      const table = new MultiplicationTable()
      const start = 1
      const end = 2
      //when
      const isValid = table.verifyInput(start, end)
      //then
      expect(isValid).toBe(true)
    })

    it('should return false when start number is greater than end number and all number is in range of 1 to 10', () => {
      // given
      const table = new MultiplicationTable()
      const start = 2
      const end = 1
      //when
      const isValid = table.verifyInput(start, end)
      //then
      expect(isValid).toBe(false)
    })

    it('should return false when start number is not greater than end number but start number is not in range of 1 to 10', () => {
      // given
      const table = new MultiplicationTable()
      const start = 0
      const end = 1
      //when
      const isValid = table.verifyInput(start, end)
      //then
      expect(isValid).toBe(false)
    })

    it('should return false when start number is not greater than end number but end number is not in range of 1 to 10', () => {
      // given
      const table = new MultiplicationTable()
      const start = 1
      const end = 11
      //when
      const isValid = table.verifyInput(start, end)
      //then
      expect(isValid).toBe(false)
    })
  })

  describe('Generate Column Item', () => {
    it('should generate multiplication column item by given multiplier and multiplicand', () => {
      // given
      const table = new MultiplicationTable()
      const multiplier = 1
      const multiplicand = 1
      //when
      const multiplicationColumnItem = table.generateColumnItem(multiplier, multiplicand)
      //then
      expect(multiplicationColumnItem).toBe('1*1=1')
    })
  })

  describe('Generate Row', () => {
    it('should generate multiplication row by given start number and end number', () => {
      // given
      const table = new MultiplicationTable()
      const rowStartNumber = 1
      const rowEndNumber = 3
      //when
      const multiplicationRow = table.generateRow(rowStartNumber, rowEndNumber)
      //then
      expect(multiplicationRow).toBe('1*3=3 2*3=6 3*3=9')
    })
  })


  describe( 'Render multiplication table', () => {
    it('should render multiplication table of (2, 4)', () => {
      // given
      const multiplicationTable = new MultiplicationTable()
      const start = 2
      const end = 4

      //when
      const renderedTable = multiplicationTable.render(start, end)

      //then
      expect(renderedTable).toBe('2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16')
    })
  })
})
