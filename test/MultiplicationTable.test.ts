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

  it('should render empty when given start is not a valid int', () => {
    const table = new MultiplicationTable()
    const start: any = 'a'
    const end = 2
    const rendered = table.render(start as number, end)

    expect(rendered).toBe('')
  })

  it('should render empty when given end is not a valid int', () => {
    const table = new MultiplicationTable()
    const start = 1
    const end: any = 'a'

    const renderd = table.render(start, end as number)

    expect(renderd).toBe('')
  })

  it('should return true call isInteger when given number is 2', () => {
    const table = new MultiplicationTable()
    const num = 2

    const isInteger = table.isInteger(num)

    expect(isInteger).toBe(true)
  })

  it('should return false call isInteger when given is "a"', () => {
    const table = new MultiplicationTable()
    const num:any = 'a'

    const isInteger = table.isInteger(num)

    expect(isInteger).toBe(false)
  })

  it('should render empty when given start is not in range 1~10', () => {
    const table = new MultiplicationTable()
    const start = 11
    const start2 = -1
    const end = 12

    const rendered = table.render(start, end)
    const rendered2 = table.render(start2, end)

    expect(rendered).toBe('')
    expect(rendered2).toBe('')
  })

  it('should render empty when given end is not in range 1~10', () => {
    const table = new MultiplicationTable()
    const start = 1
    const end = 12

    const rendered = table.render(start, end)

    expect(rendered).toBe('')
  })

  it('should return true call isInRange when given number is 2', () => {
    const table = new MultiplicationTable()
    const num = 2

    const result = table.isInRange(num)

    expect(result).toBe(true)

  })

  it('should return false call isInRange when given number is 11', () => {
    const table = new MultiplicationTable()
    const num = 11

    const result = table.isInRange(num)

    expect(result).toBe(false)
  })

  it('should render empty when given start is greater than end', () => {
    const table = new MultiplicationTable()
    const start = 3
    const end = 2

    const rendered = table.render(start, end)

    expect(rendered).toBe('')
  })

  it('should render Multiplication Table when given start is 2 and end is 4', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    const rendered = table.render(start, end)

    expect(rendered).toBe('2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16')
  })


  it('should return false call isGreaterThan when given start is 2 and end is 1', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    const result = table.isGreaterThan(start, end)

    expect(result).toBe(false)

  })

  it('should return true call isGreaterThan when given start is 1 and end is 2', () => {

    const table = new MultiplicationTable()
    const start = 1
    const end = 2

    const result = table.isGreaterThan(start, end)

    expect(result).toBe(true)
  })

  it('should render Multiplication line when given start is 3 and end is 5', () => {
    const table = new MultiplicationTable()
    const start = 3
    const end = 5

    const line = table.renderMultiplicationLine(start, end)

    expect(line).toBe('3*5=15 4*5=20 5*5=25')
  })

  it('should render Multiplication table when given start is 3 and end is 5', () => {
    const table = new MultiplicationTable()
    const start = 3
    const end = 5

    const multiplicationTable = table.renderMultiplicationTable(start, end)

    expect(multiplicationTable).toBe('3*3=9\n3*4=12 4*4=16\n3*5=15 4*5=20 5*5=25')

  })

})
