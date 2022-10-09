export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
  }

  isGreaterThanEndNumber(start: number, end: number) {
    return start > end;
  }

  isOutOfRange(start: number, end: number) {
    return start < 1 || end > 9;
  }
}
