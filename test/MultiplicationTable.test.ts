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
  it('should throw error input exception when render given start grater than end', () => {
    // given
    const table = new MultiplicationTable()
    const start = 12
    const end = 1


    //then
    expect(() => table.render(start, end)).toThrow(new Error('error input'))
  })
})
