export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (start>end ||this.checkNumberInRangeOneToTen(start)||this.checkNumberInRangeOneToTen(end)){
      throw  new Error('error input')
    }
    return '1*1=1'
  }

  private checkNumberInRangeOneToTen(start: number) {
    return start < 1 || start > 10
  }
}
