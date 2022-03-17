function solution(m, n, board) {
  // [stirng 1차원 배열 board를 2차원 배열로 만드는 로직]
  board = board.map(el => el.split(''));
  // console.log(board)

  // [ 인접한 4개의 블록값이 같은 경우, 해당 블록의 인덱스를 찾는 로직 ]
  const findSame4Blocks = () => {
    const result = [];
    for (let row = 0; row < board.length - 1; row++) {
      const record = board[row];
      for (let col = 0; col < record.length; col++) {
        const val = record[col];
        if (val !== 0) {
          if (val === record[col + 1]) {
            const str = val + val;
            const downStr = board[row + 1][col] + board[row + 1][col + 1];
            if (str === downStr) { result.push([row, col]) }
          }
        }
      }
    }
    return result;
  }
  // const blocks = findSame4Blocks();
  // console.log(blocks)

  // [ 인접한 4개 블록을 제거하는 로직 ]
  let blocks;
  const deleteSame4Blocks = () => {
    let count = 0;
    for (let i = 0; i < blocks.length; i++) {
      const row = blocks[i][0];
      const col = blocks[i][1];
      const range = [[row, col], [row, col + 1], [row + 1, col], [row + 1, col + 1]]
      for (let j = 0; j < range.length; j++) {
        const [targetRow, targetCol] = range[j];
        if (board[targetRow][targetCol] !== 0) {
          // 해당 인덱스의 블록값을 0으로 변경한다.
          board[targetRow][targetCol] = 0;
          // 카운트한다.
          count++;
        }
      }
    }
    return count;
  }
  // deleteSame4Blocks();
  // console.log(board)

  // [ 제거된 후 위에 있는 블록을 아래로 내리는 로직 ]
  const fallingAfterDelete = () => {
    for (let row = 0; row < board.length - 2; row++) {
      const record = board[row];
      for (let col = 0; col < record.length; col++) {
        const val = record[col];
        if (val === 0) {
          // 해당 블록값이 0인 경우
          // 1. 해당 칼럼의 값이 0이 아닌 경우의 row값을 찾는다.
          let notZeroRow = board.length - 1;
          for (let r = row + 1; r < board.length - 1; r++) {
            if (board[r][col] !== 0) {
              notZeroRow = r;
              break;
            }
          }
          // 2. 원 인덱스 위의 값들을 임시로 저장해둔다.
          const upValues = []
          for (let reverseRow = row - 1; reverseRow >= 0; reverseRow--) {
            upValues.push(board[reverseRow][col])
          }
          // 3. row-1부터 위의 값을 하나씩 변경한다.
          // 4. row가 0이 될 때까지, 0으로 값을 채운다.
          let j = 0;
          for (let i = notZeroRow - 1; i >= 0; i--) {
            if (upValues[j] === undefined) {
              board[i][col] = 0;
            } else {
              board[i][col] = upValues[j]
              j++;
            }
          }
        }
      }
    }
  }
  // fallingAfterDelete();
  // console.log(board)

  // [ main ]
  const main = (count) => {
    blocks = findSame4Blocks();
    if (blocks.length === 0) { return count; }

    count += deleteSame4Blocks();
    fallingAfterDelete();
    return main(count);
  }
  return main(0);
}

const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
console.log(solution(m, n, board));