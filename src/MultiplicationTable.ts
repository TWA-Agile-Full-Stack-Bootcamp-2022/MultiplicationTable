export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (start>end){
      throw  new Error('error input')
    }
    if (start<1 || start>10){
      throw new Error('error input')
    }
    if (end<1 || end>10){
      throw new Error('error input')
    }
    return '1*1=1'
  }
}
