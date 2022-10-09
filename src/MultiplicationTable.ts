export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (this.isGreaterThanEndNumber(start, end)) {
      return '';
    }
    if (this.isOutOfRange(start, end)) {
      return '';
    }
    return this.renderMultiplicationTable(start, end)
  }

  isGreaterThanEndNumber(start: number, end: number) {
    return start > end;
  }

  isOutOfRange(start: number, end: number) {
    return start < 1 || end > 9;
  }

  renderMultiplicationTable(start: number, end: number) {
    const array = [];
    for (let i = start; i <= end; i++) {
      const innerAry = []
      for (let j = start; j <= i; j++) {
        innerAry.push(`${j}*${i}=${j*i}`)
      }
      array.push(innerAry.join('  '))
    }
    return array.join('\n')
  }
}
