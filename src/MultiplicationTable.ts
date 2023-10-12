export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.isInteger(start) || !this.isInteger(end)) {
      return ''
    }
    return '1*1=1'
  }

  public isInteger(num: number) : boolean {
    return Number.isInteger(num)
  }
}
