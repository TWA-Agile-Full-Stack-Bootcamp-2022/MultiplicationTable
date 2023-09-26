import {MultiplicationTable, Multiplication} from '../src/MultiplicationTable'
import fc from 'fast-check'


describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    // when
    const rendered = table.render(start, end)

    // then
    expect(rendered).toBe('1*1=1')
  })

  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    // when
    const rendered = table.render(start, end)

    // then
    expect(rendered).toBe(`2*2=4
2*3=6 3*3=9
2*4=8 3*4=12 4*4=16`)
  })

  it('both start and end should be integers', () => {
    fc.assert(
      fc.property(
        // given
        fc.float({ min: 1, max: 9 }),
        fc.float({ min: 1, max: 9 }),
        (start, end) => {
          const table = new MultiplicationTable()

          // when
          const render = () => table.render(start, end)

          // then
          expect(render).toThrow()
        }
      )
    )
  })

  it('both start and end should be integer between 1 and 9', () => {
    fc.assert(
      fc.property(
        // given
        fc.integer({ min: 10, max: 100 }),
        fc.integer({ min: 1, max: 9 }),
        (start, end) => {
          const table = new MultiplicationTable()

          // when
          const render = () => table.render(start, end)

          // then
          expect(render).toThrow()
        }
      )
    )
  })

  it('start should not be greater then end', () => {
    fc.assert(
      fc.property(
        // given
        fc.integer({ min: 5, max: 9 }),
        fc.integer({ min: 1, max: 4 }),
        (start, end) => {
          const table = new MultiplicationTable()

          // when
          const render = () => table.render(start, end)

          // then
          expect(render).toThrow()
        }
      )
    )
  })

  it('should return a table with the correct number of equations', () => {
    fc.assert(
      fc.property(
        // given
        fc.integer({ min: 1, max: 4 }),
        fc.integer({ min: 5, max: 9 }),
        (start, end) => {
          const table = new MultiplicationTable()

          // when
          const rendered = table.render(start, end)

          // then
          const equations = rendered.split('\n').map(line => line.split(' '))
          const length = equations.reduce((accumulator, current) => {
            return accumulator + current.length
          }, 0)
          // Sn=n*a1+n(n-1)d/2=(end-start+1)*1+(end-start+1)*(end-start)/2
          expect(length).toEqual((end-start+1)*1+(end-start+1)*(end-start)/2)
        }
      )
    )
  })

  it('should return a table with the correct length of each line', () => {
    // See https://fast-check.dev/docs/tutorials/quick-start/our-first-property-based-test/
    fc.assert(
      fc.property(
        // given
        fc.integer({ min: 1, max: 4 }),
        fc.integer({ min: 5, max: 9 }),
        (start, end) => {
          const table = new MultiplicationTable()

          // when
          const rendered = table.render(start, end)

          // then
          const rawTable = rendered.split('\n').map(line => line.split(' '))
          const lengthOfLines = rawTable.map(line => line.length)
          for (let i = 1; i < lengthOfLines.length; ++i) {
            expect(lengthOfLines[i] - lengthOfLines[i - 1]).toEqual(1)
          }
        }
      )
    )
  })

  it('should return a table who contains correct multiplication equations', () => {
    fc.assert(
      fc.property(
        // given
        fc.integer({ min: 1, max: 4 }),
        fc.integer({ min: 5, max: 9 }),
        (start, end) => {
          const table = new MultiplicationTable()

          //when
          const rendered = table.render(start, end)

          // then
          const rawTable = rendered.split('\n').map(line => line.split(' ').map(equation => parseEquation(equation)))
          const equations = flatten(rawTable)
          for (const multiplication of equations) {
            expect(multiplication[0]*multiplication[1]).toEqual(multiplication[2])
          }
        }
      )
    )
  })

  function parseEquation(str: string): Multiplication {
    const regexp = /(\d+)([*+\-\\/])(\d+)([=])(\d+)/
    const matches = str.match(regexp)

    if (!matches) {
      throw new Error('Invalid equation format')
    }

    return [
      parseInt(matches[1]),
      parseInt(matches[3]),
      parseInt(matches[5])
    ]
  }

  function flatten(arr: Multiplication[][]): Multiplication[] {
    return arr.reduce((acc, val) => acc.concat(val), [])
  }
})
