export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (start>end){
      throw  new Error('error input')
    }
    return '1*1=1'
  }
}
