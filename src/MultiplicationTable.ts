export class MultiplicationTable {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  numbers: Map<number, number[]>

  public render(start: number, end: number): string {
    if (start > end || this.checkNumberInRangeOneToTen(start) || this.checkNumberInRangeOneToTen(end)) {
      throw  new Error('error input')
    }
    this.getNumberList(start, end)
    return this.renderTableRow(start)
  }

  private renderTableRow(start: number) {
    let result = ''
    this.numbers.forEach((rowColumns, row) => {
      let rowInfo = ''
      for (let i = start; i <= row; i++) {
        const columns = i + '*' + row + '=' + i * row + ' '
        rowInfo += columns
      }
      result += rowInfo.trim() + '\n'
    })
    return result
  }

  private getNumberList(start: number, end: number) {
    this.numbers = new Map<number, number[]>()
    for (let i = start; i <= end; i++) {
      const columns = []
      for (let j = start; j <= i; j++) {
        columns.push(j)
      }
      this.numbers.set(i, columns)
    }
  }

  private checkNumberInRangeOneToTen(start: number) {
    return start < 1 || start > 10
  }
}
