export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (!this.checkStartNumberAndEndNumber(start, end)) {
      return ''
    }

    const multiplicationList = this.renderMultiplicationList(start, end)

    return multiplicationList.join('\n')
  }

  private checkStartNumberAndEndNumber(start: number, end: number): boolean {
    return start >= 1 && start <= 10 && end >= 1 && end <= 10 && start <= end
  }

  private renderMultiplicationList(start: number, end: number): string[] {
    const multiplicationList: string[] = []
    for (let num=start; num<=end; num++) {
      multiplicationList.push(this.renderMultiplicationLine(start, num))
    }
    return multiplicationList
  }

  private renderMultiplicationLine(start: number, multiply: number): string {
    const multiplications: string[] = []
    for (let num=start; num<=multiply; num++) {
      multiplications.push(this.renderMultiplication(num, multiply))
    }
    return multiplications.join('\t')
  }


  private renderMultiplication(num: number, multiply: number): string {
    return num + '*' + multiply + '=' + num * multiply
  }
}
