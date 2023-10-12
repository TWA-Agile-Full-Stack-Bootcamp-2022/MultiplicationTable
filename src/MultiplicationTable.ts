export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.isInteger(start) || !this.isInteger(end)) {
      return ''
    }

    if (!this.isInRange(start) || !this.isInRange(end)) {
      return ''
    }

    if (!this.isGreaterThan(start, end)) {
      return ''
    }

    const result = this.renderMultiplicationTable(start, end)

    return result

  }

  public isInteger(num: number) : boolean {
    return Number.isInteger(num)
  }

  public isInRange(num: number) : boolean {
    return num >= 1 && num <= 10
  }

  public isGreaterThan(start: number, end: number) : boolean {
    return start <= end
  }

  public renderMultiplicationLine(start: number, end: number): string {
    const line: string[] = []
    for(let i = start; i <= end; i++) {
      line.push(`${i}*${end}=${i*end}`)
    }
    return line.join(' ')
  }

  public renderMultiplicationTable(start: number, end: number): string {
    const table: string[] = []
    for(let i = start; i <= end; i++) {
      table.push(this.renderMultiplicationLine(start, i))
    }
    return table.join('\n')
  }
}
