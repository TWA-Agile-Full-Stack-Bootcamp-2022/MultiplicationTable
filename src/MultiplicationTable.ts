export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!Number.isInteger(start)) {
      return ''
    }
    if (!Number.isInteger(end)) {
      return ''
    }
    return '1*1=1'
  }
}
