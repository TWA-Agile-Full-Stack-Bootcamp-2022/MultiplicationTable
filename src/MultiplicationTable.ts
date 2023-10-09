export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
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
    for (let i = rowStartNumber; i <= rowEndNumber; i++) {
      multiplicationRow += this.generateColumnItem(rowStartNumber, i)
      if( i !== rowEndNumber) {
        multiplicationRow += ' '
      }
    }
    return multiplicationRow
  }
}
