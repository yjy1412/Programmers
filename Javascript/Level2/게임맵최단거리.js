function solution(maps) {
  const rowLen = maps.length;
  const colLen = maps[0].length;
  const me = [0, 0];
  const you = [rowLen-1, colLen-1];
  const rowDirect = [1, -1, 0, 0];
  const colDirect = [0, 0, 1, -1];
  
  const queue = [me];
  maps[0][0] = 0;
  let count = 1;
  
  while (queue.length > 0) {
      const size = queue.length;
      
      for (let x = 0; x < size; x++) {
          const cur = queue.shift();
          const nowRow = cur[0];
          const nowCol = cur[1];
          for (let i = 0; i < 4; i++) {
              const nextRow = nowRow + rowDirect[i];
              const nextCol = nowCol + colDirect[i];

              if (nextRow >= 0 && nextRow < rowLen && nextCol >= 0 && nextCol < colLen) {
                  if (nextRow === rowLen-1 && nextCol === colLen-1) {
                      // 마지막 포인트에 제일 먼저 도착한 경우.
                      return ++count;
                  } else if (maps[nextRow][nextCol] === 1) {
                      queue.push([nextRow, nextCol]);
                      maps[nextRow][nextCol] = 0;
                  }
              }
          }
      }
      count++;
  }
  return -1;
}
const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
console.log(solution(maps))