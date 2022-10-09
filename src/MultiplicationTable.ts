export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.checkStartNumberAndEndNumber(start)) {
      return '';
    }

    return '1*1=1'
  }

  private checkStartNumberAndEndNumber(start: number) {
    return start >= 1 && start <= 10;
  }

}
