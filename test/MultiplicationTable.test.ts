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
})
