function solution(board, moves) {
  // 0. 변수 선언
  let bucket = [];
  let count = 0;
  
  // 1. moves 인자를 조회하여 선택할 인덱스를 정한다.
  for ( let i = 0; i < moves.length; i ++ ) {
      const x = moves[i];
      for ( let j = 0; j < board.length; j ++ ) {
          const selected = board[j][x - 1]; // moves는 1부터 시작함.
          // 2. 해당 인덱스에 인형이 있을 때만, 가장 위에 있는 것을 선택한다.
          if ( selected !== 0 ) {
              // 2-1. 선택했다면, 해당 인형을 board에서 제거한다.
              board[j].splice(x-1, 1, 0);
              // 3. 바구니에 1개 이상 담겨 있다면, 이전에 담긴 인형이 현재 선택한 인형과 같은지 비교한다.
              if ( bucket.length > 0 ) {
                  const previousDoll = bucket[bucket.length - 1];
                  // 4. 같다면, 담긴 인형을 제거하고, 제거횟수를 카운트한다.
                  if ( previousDoll === selected ) {
                      bucket.pop();
                      count += 2;
                  } else {
                  // 4-1. 다르다면, 선택한 인형을 바구니에 담는다.
                      bucket.push(selected);
                  }
              // 3-1. 바구니에 담긴 인형이 없다면, 선택한 인형을 바구니에 담는다.
              } else {
                  bucket.push(selected);
              }
              // 5. 인형을 선택했다면, 다음 moves로 이동한다.
              break;
          }
      }
  }
  return count;
}

const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));