import {MultiplicationTable} from '../src/MultiplicationTable'

// TASK 1 : should return true when call isGreaterThanEndNumber given start number 3 and end number is 2
// TASK 2: should return false when call isGreaterThanEndNumber given start number 0 and end number is 2
// TASK 3: should return false when call isGreaterThanEndNumber given start number equals with end number is 2
// TASK 4: should return true when call isOutOfRange given start number 0 smaller than 1
// TASK 5: should return true when call isOutOfRange given end number 11
// TASK 6: should return true when call isOutOfRange given end number 10
// TASK 7: should return false when call isOutOfRange given end number 9 and start number 1

// TASK 8: should return blank string table when call render given start number 4 isGreaterThan endNumber 2
// TASK 9: should return blank string table when call render given start number 0 isOutOfRange
// TASK 10: should return multiplication table when call render given start number 2 and end number 4

describe('Multiplication Table', () => {
  const BLANK_STRING = '';

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

  it('should return true when call isGreaterThanStartNumber given start number 3 and end number is 2', () => {
    // given
    const table = new MultiplicationTable()
    const start = 3
    const end = 2

    //when
    const isGreaterThanStartNumber = table.isGreaterThanEndNumber(start, end)

    //then
    expect(isGreaterThanStartNumber).toBeTruthy()
  })

  it('should return false when call isGreaterThanStartNumber given start number 0 and end number is 2', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 2

    //when
    const isGreaterThanStartNumber = table.isGreaterThanEndNumber(start, end)

    //then
    expect(isGreaterThanStartNumber).toBeFalsy()
  })

  it('should return false when call isGreaterThanEndNumber given start number equals with end number is 2', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 2

    //when
    const isGreaterThanStartNumber = table.isGreaterThanEndNumber(start, end)

    //then
    expect(isGreaterThanStartNumber).toBeFalsy()
  })

  it('should return true when call isOutOfRange given start number 0 smaller than 1', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 4
    //when
    const isOutOfRange = table.isOutOfRange(start, end)

    //then
    expect(isOutOfRange).toBeTruthy()
  })

  it('should return true when call isOutOfRange given end number 11', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 11
    //when
    const isOutOfRange = table.isOutOfRange(start, end)

    //then
    expect(isOutOfRange).toBeTruthy()
  })

  it('should return true when call isOutOfRange given end number 10', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 10
    //when
    const isOutOfRange = table.isOutOfRange(start, end)

    //then
    expect(isOutOfRange).toBeTruthy()
  })

  it('should return false when call isOutOfRange given end number 9 and start number 1', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 9
    //when
    const isOutOfRange = table.isOutOfRange(start, end)

    //then
    expect(isOutOfRange).toBeFalsy()
  })

  it('should return blank string table when call render given start number 4 isGreaterThan endNumber 2', () => {
    // given
    const table = new MultiplicationTable()
    const start = 4
    const end = 2
    //when
    const tablePrint = table.render(start, end)

    //then
    expect(tablePrint).toBe(BLANK_STRING)
  })
  it('should return blank string table when call render given start number 0 isOutOfRange', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 2
    //when
    const tablePrint = table.render(start, end)

    //then
    expect(tablePrint).toBe(BLANK_STRING)
  })

  it('should return multiplication table when call render given start number 2 and end number 4', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4
    //when
    const tablePrint = table.render(start, end)

    //then
    expect(tablePrint).toBe('2*2=4\n' +
        '2*3=6  3*3=9\n' +
        '2*4=8  3*4=12  4*4=16')
  })

})
