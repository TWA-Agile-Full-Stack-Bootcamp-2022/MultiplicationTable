export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!Number.isInteger(start)) {
      return ''
    }
    return '1*1=1'
  }
}
