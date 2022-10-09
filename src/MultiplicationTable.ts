export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
  }

  isGreaterThanEndNumber(start: number, end: number) {
    return start > end;
  }
}
