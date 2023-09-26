export type Multiplication = [number, number, number]

export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!(this.verify(start, end))) {
      throw new Error('Multipliers should be an integer between 1 and 9')
    }
    const table = this.generateMultiplicationTable(start, end)
    return this.renderMultiplicationTable(table)
  }

  private verify(start: number, end: number): boolean {
    return Number.isInteger(start) && start >= 1 && start <= 9
        && Number.isInteger(end) && end >= 1 && end <= 9
        && start <= end
  }

  private generateMultiplicationTable(start:number, end:number): Multiplication[][] {
    const table = []
    for (let row = start; row <= end; row++) {
      const line = []
      for (let column = start; column <= row; column++) {
        const multiplication: Multiplication = [column, row, row*column]
        line.push(multiplication)
      }
      table.push(line)
    }
    return table
  }

  private renderMultiplicationTable(table: Multiplication[][]): string {
    return table.map(line => line.map(item => `${item[0]}*${item[1]}=${item[2]}`).join(' ')).join('\n')
  }
}
