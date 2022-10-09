export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.checkStartNumberAndEndNumber(start, end)) {
      return ''
    }

    const multiplicationList = this.renderTables(start, end)

    return this.mergeMultiplications(multiplicationList)
  }

  private checkStartNumberAndEndNumber(start: number, end: number) {
    return start >= 1 && start <= 10 && end >= 1 && end <= 10 && start <= end
  }

  mergeMultiplications(multiplicationList: string[]): string {
    return multiplicationList.join('\n')
  }

  renderTables(start: number, end: number) {
    const multiplicationList: string[] = []
    for (let num=start; num<=end; num++) {
      multiplicationList.push(this.renderLine(start, num))
    }
    return multiplicationList
  }

  renderLine(start: number, end: number) {
    let multiplicationLine = ''
    for (let num=start; num<end; num++) {
      multiplicationLine += this.renderMultiplication(num, end) + '\t'
    }
    return multiplicationLine + this.renderMultiplication(end, end)
  }

  private renderMultiplication(num: number, multiplyBy: number) {
    return num + '*' + multiplyBy + '=' + num * multiplyBy
  }
}
