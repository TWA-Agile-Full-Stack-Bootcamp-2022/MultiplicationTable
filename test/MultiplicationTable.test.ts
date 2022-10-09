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

  it('should return empty string when render given the start number is not in range 1 to 10', () => {
    // given
    const table = new MultiplicationTable()
    const startLessThanOne = 0
    const startLargerThanTen = 11
    const end = 1

    // when
    const renderedWithStartNumberLessThenOne = table.render(startLessThanOne, end)
    const renderedWithStartNumberLargerThenTen = table.render(startLargerThanTen, end)

    // then
    expect(renderedWithStartNumberLessThenOne).toBe('')
    expect(renderedWithStartNumberLargerThenTen).toBe('')
  })

  it('should return empty string when render given the end number is not in range 1 to 10', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const endLessThanOne = 0
    const endLargerThanTen = 11

    // when
    const renderedWithEndNumberLessThenOne = table.render(start, endLessThanOne)
    const renderedWithEndNumberLargerThenTen = table.render(start, endLargerThanTen)

    // then
    expect(renderedWithEndNumberLessThenOne).toBe('')
    expect(renderedWithEndNumberLargerThenTen).toBe('')
  })

  it('should return empty string when render given the start number is larger than the end number', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    // when
    const rendered = table.render(start, end)

    // then
    expect(rendered).toBe('')
  })

  it('should render multiplication table of (2, 2)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4')
  })
})
