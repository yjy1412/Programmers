function solution(maps) {
  const rowLen = maps.length;
  const colLen = maps[0].length;
  const me = [0, 0];
  const you = [rowLen, colLen];
  
  const result = [];
  const findRoute = (maps, cur, count) => {
      // 1. 현재 위치를 0으로 바꾼다.
      // 2. 현재 위치에서 갈 수 있는 디렉션을 정한다.
      // 3. 다음 위치로 움질일때마다 카운트한다.
      // 4. you의 위치에 도달했다면, 이를 result배열에 담는다.
      // 5. 만약, 4에 해당하지 않는데, 더 이상 갈 수 있는 곳이 없다면 해당 루트는 탐색을 종료한다.
      // 6. 모든 루트에서 you에 도달하지 못했다면 -1을 리턴한다.
      // 7. 가장 count가 짧은 경로를 최종 리턴한다.
      if (cur[0] === rowLen-1 && cur[1] === colLen-1) {
          result.push(count);
          return;
      }
      // 1. 현재 위치를 0으로 바꾼다.
      const row = cur[0];
      const col = cur[1];
      const mapCopy = JSON.parse(JSON.stringify(maps));
      mapCopy[row][col] = 0;
      
      // 2. 현재 위치에서 갈 수 있는 디렉션을 정한다.
      // 갈 수 있는 방향은 상,하,좌,우이다.
      // 해당 경로의 값이 1인 경우에만 이동 가능하다.
      // 범위는 maps내에서만 이동 가능한다.
      const up = row - 1;
      const down = row + 1;
      const left = col - 1;
      const right = col + 1;
      const direction = { up, down, left, right };
      const candidate = [];
      for (let key in direction) {
          if (key === "up" || key === "down") {
              // 방향이 상, 하인 경우.
              if (direction[key] >= 0 && direction[key] < rowLen) {
                  if (mapCopy[direction[key]][col] === 1) {
                      candidate.push([direction[key], col])
                  }
              }
          } else {
              // 방향이 좌, 우인 경우.
              if (direction[key] >= 0 && direction[key] < colLen) {
                  if (mapCopy[row][direction[key]] === 1) {
                      candidate.push([row, direction[key]])
                  }
              }
          }
      }
      // console.log(candidate);
      // 3. 다음 위치로 움질일때마다 카운트한다.
      for (let i = 0; i < candidate.length; i++) {
          const next = candidate[i];
          findRoute(mapCopy, next, count+1)
      }
  }
  findRoute(maps, me, 0);
  // 하나의 경로도 찾지 못했다면 -1를 리턴한다.
  // 경로를 찾았다면, 그 중에 최소의 경로의 리턴한다.
  if (result.length === 0) { return -1 }
  else { return Math.min(...result) + 1 }
}
const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
console.log(solution(maps))