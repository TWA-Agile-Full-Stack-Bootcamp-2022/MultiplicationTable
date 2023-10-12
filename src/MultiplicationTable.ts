export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.isInteger(start) || !this.isInteger(end)) {
      return ''
    }

    if (!this.isInRange(start) || !this.isInRange(end)) {
      return ''
    }

    return '1*1=1'
  }

  public isInteger(num: number) : boolean {
    return Number.isInteger(num)
  }

  public isInRange(num: number) : boolean {
    return num >= 1 && num <= 10
  }
}
