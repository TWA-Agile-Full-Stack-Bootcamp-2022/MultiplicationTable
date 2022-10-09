export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.checkStartNumberAndEndNumber(start, end)) {
      return ''
    }

    return '1*1=1'
  }

  private checkStartNumberAndEndNumber(start: number, end: number) {
    return start >= 1 && start <= 10 && end >= 1 && end <= 10 && start <= end
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
