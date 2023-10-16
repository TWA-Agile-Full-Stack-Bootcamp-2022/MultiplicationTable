export class MultiplicationTable {
  public render(start: number, end: number): string {
    let lineNum: number
    let table = ''
    for (lineNum = 0; lineNum <= end - start; lineNum++) {
      let line = this.renderLine(start, lineNum)
      if (lineNum < end - start)
        line += '\n'
      table += line
    }
    return table
  }

  private renderLine(start: number, lineNum: number): string {
    const right = start + lineNum
    let left: number
    let line = ''
    for (left = start; left <= right; left++) {
      line += this.renderItem(left, right)
    }
    return line
  }
  renderItem(left: number, right: number) {
    const item = left + '*' + right + '=' + left * right
    if (left === right)
      return item
    return item + '\t'
  }
}


