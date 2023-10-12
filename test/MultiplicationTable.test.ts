import { table } from 'console'
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

})
