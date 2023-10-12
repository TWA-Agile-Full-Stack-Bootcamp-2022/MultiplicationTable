export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.isInteger(start) || !this.isInteger(end)) {
      return ''
    }

    if (!this.isInRange(start) || !this.isInRange(end)) {
      return ''
    }

    if (!(start <= end)) {
      return ''
    }

    const table = []
    for(let i = start; i <= end; i++) {
      const line: string[] = []
      for (let j = start; j <= i; j++) {
        line.push(`${j}*${i}=${i*j}`)
      }
      table.push(line.join(' '))
    }

    const result = table.join('\n')
    return result

  }

  public isInteger(num: number) : boolean {
    return Number.isInteger(num)
  }

  public isInRange(num: number) : boolean {
    return num >= 1 && num <= 10
  }
}
