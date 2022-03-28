function solution(board) {
  // 동적 계획법(DP) 구현
  // 1. (1,1)에서부터 탐색을 시작한다.
  // 2. 현재의 값이 1 이상일 경우
  // 3. 왼쪽, 위, 왼쪽 위의 값 중 최소값의 +1을 하여 자신의 인덱스에 할당한다.
  // 4. 모든 탐색이 끝났을 때, 가장 큰 값의 제곱을 리턴한다.
  
  const rowLen = board.length;
  const colLen = board[0].length;
  
  // 각 길이가 1일 경우의 사전처리
  if (rowLen === 1 || colLen === 1) { return 1 }
  
  // 본 처리
  let maxVal = 0;
  for (let row = 1; row < rowLen; row++) {
      const rowArr = board[row];
      for (let col = 1; col < colLen; col++) {
          const val = rowArr[col];
          if (val === 0) { continue }
          else {
              const upVal = board[row-1][col];
              const leftVal = board[row][col-1];
              const up_leftVal = board[row-1][col-1];
              const minVal = Math.min(upVal, leftVal, up_leftVal) + 1;
              board[row][col] = minVal;
              
              if (minVal > maxVal) { maxVal = minVal }
          }
      }
  }
  return maxVal * maxVal
}

solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]])