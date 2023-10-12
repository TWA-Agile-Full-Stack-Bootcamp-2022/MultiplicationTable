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
})
