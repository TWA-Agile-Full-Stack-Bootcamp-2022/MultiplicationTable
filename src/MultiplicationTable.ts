export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (!this.checkStartNumberAndEndNumber(start, end)) {
      return ''
    }
    return this.renderMultiplication(start, end)
  }

  private checkStartNumberAndEndNumber(start: number, end: number): boolean {
    return start >= 1 && start <= 10 && end >= 1 && end <= 10 && start <= end
  }

  private renderMultiplication(num: number, multiply: number): string {
    return num + '*' + multiply + '=' + num * multiply
  }
}
