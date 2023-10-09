export class MultiplicationTable {
  public render(start: number, end: number): string{
    let multiplicationTable = ''
    for (let rowEndNumber = start; rowEndNumber <= end ; rowEndNumber++) {
      multiplicationTable += this.generateRow(start, rowEndNumber)
      if(this.notLastRow(rowEndNumber, end))
        multiplicationTable += '\n'
    }
    return multiplicationTable
  }

  public isGreaterThan(start:number, end: number): boolean {
    return start > end
  }

  public inRangeOfTen(number :number): boolean {
    return number >= 1 && number <= 10
  }

  public verifyInput(start:number, end: number): boolean {
    const isStartNumberGreaterThanEnd = this.isGreaterThan(start, end)
    const inRangeOfTen = this.inRangeOfTen(start) && this.inRangeOfTen(end)
    return !isStartNumberGreaterThanEnd && inRangeOfTen
  }

  public generateColumnItem(multiplier: number, multiplicand: number): string {
    return multiplier + '*' + multiplicand + '=' + multiplier * multiplicand
  }

  public generateRow(rowStartNumber:number, rowEndNumber:number): string {
    let multiplicationRow = ''
    for (let columnIndex = rowStartNumber; columnIndex <= rowEndNumber; columnIndex++) {
      multiplicationRow += this.generateColumnItem(columnIndex, rowEndNumber)
      if(this.notLastColumn(columnIndex, rowEndNumber))
        multiplicationRow += ' '
    }
    return multiplicationRow
  }

  private notLastColumn(columnIndex: number, rowEndNumber: number) {
    return columnIndex !== rowEndNumber
  }

  private notLastRow(rowIndex: number, end: number) {
    return rowIndex !== end
  }
}
