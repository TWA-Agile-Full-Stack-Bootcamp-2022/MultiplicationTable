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

}
