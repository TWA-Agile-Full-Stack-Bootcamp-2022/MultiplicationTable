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
    expect(rendered).toBe('1*1=1\n')
  })
  it('should throw error input exception when render given start grater than end', () => {
    // given
    const table = new MultiplicationTable()
    const start = 12
    const end = 1


    //then
    expect(() => table.render(start, end)).toThrow(new Error('error input'))
  })
  it.each([{start: 0, end: 1}, {start: 11, end: 13}, {
    start: 20,
    end: 21
  }])('should throw error input exception when render given start not in range 1~10', (info) => {
    //given
    const table = new MultiplicationTable()
    //then
    expect(() => table.render(info.start, info.end)).toThrow(new Error('error input'))
  })
  it.each([{start: 0, end: 0}, {start: 9, end: 13}, {
    start: 8,
    end: 21
  }])('should throw error input exception when render given end not in range 1~10', (info) => {
    //given
    const table = new MultiplicationTable()
    //then
    expect(() => table.render(info.start, info.end)).toThrow(new Error('error input'))
  })
  it('should set Table rowNumbers Map has 5key from 1 to 5 and value as list 1 to row when render given start 1,end 5', () => {
    //given
    const table = new MultiplicationTable()
    const start = 1
    const end = 5
    //when
    table.render(start, end)
    //then
    expect(table.numbers).toEqual(new Map([[1, [1]], [2, [1, 2]], [3, [1, 2, 3]], [4, [1, 2, 3, 4]], [5, [1, 2, 3, 4, 5]]]))
  })
  it('should render table form 1 to 5 when render given start 1,end 5', () => {
    //given
    const table = new MultiplicationTable()
    const start = 1
    const end = 5
    //when
    const result = table.render(start, end)
    expect(result).toEqual('1*1=1\n' +
      '1*2=2 2*2=4\n' +
      '1*3=3 2*3=6 3*3=9\n' +
      '1*4=4 2*4=8 3*4=12 4*4=16\n' +
      '1*5=5 2*5=10 3*5=15 4*5=20 5*5=25\n')
  })
})
