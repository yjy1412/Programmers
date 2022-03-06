function solution(places) {
  // P는 응시자가 앉은 자리
  // O는 빈 테이블
  // X는 파티션
  // 두 포인트가 각각 (r1,c1), (r2,c2)라고 할 때, 맨허튼 거리 = |r1-r2| + |c1-c2|

  // 요구 사항
  // 1. 응시자들끼리 맨해튼 거리가 2이하로 앉지마라.
  // 2. 단, 응시자 사이에 파티션이 있을 경우에는 허용해라.

  // 응시자의 자리가 주어졌을 때, 해당 응시자가 거리두기를 잘 지키고 있는지 확인하는 알고리즘
  const isHaveDistance = (matrix, row, col) => {
    // 1. 상하좌우 직선 거리 2이내에 사람이 있는가?
      // 1. 방향을 정한다.
      // 2. 해당 방향으로 전진했을 때의 값을 구한다.
      // 3. 1칸 전진했을 때 값이 "P"인 경우
      // 4. 2칸 전진했을 때 값이 "P"인 경우
      // 5. 모든 방향에서 위의 과정을 반복한다.
      const directions = [row, col];
      const bucket = [1, -1];
      
      for (let i = 0; i < 2; i++) {
        const direction = directions[i];
        for (let j = 0; j < 2; j++) {
          const temp = bucket[j];
          for (let distance = 1; distance <= 2; distance++) {
            const idx = direction + (temp * distance);

            if (idx < 0 || idx > 4) { break }
            
            let val = i === 0 ? matrix[idx][col] : matrix[row][idx];
            if (val === "P") {
              if (distance === 1) { return 0 }
              let val2 = i === 0 ? matrix[idx - temp][col] : matrix[row][idx - temp];
              if (val2 !== "X") { return 0 }
            }
          }
        }
      }
      // 2. 1칸 거리의 대각선에 사람이 있는가?
      // 2-2. 사람이 있다면, 그 사이에 파티션이 있는가? >> 없다면, 0 반환
      for (let i = 0; i < 2; i++) {
        const pick1 = bucket[i];
        for (let j = 0; j < 2; j++) {
          const pick2 = bucket[j];
          const row2 = row + pick1;
          const col2 = col + pick2;

          if (row2 < 0 || col2 < 0 || row2 > 4 || col2 > 4) { continue };
          
          const val = matrix[row2][col2];
          if (val === "P") {
            const val2 = matrix[row2][col];
            const val3 = matrix[row][col2];

            if (val2 !== "X" || val3 !== "X") { return 0 }
          }
        }
      }
  }

  const result = [];
    loop1:
    for (let i = 0; i < 5; i++) {
      const place = places[i];
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
          const point = place[row][col];
          if (point === 'P') {
            if (isHaveDistance(place, row, col) === 0) { 
              result.push(0);
              continue loop1;
            }
          }
        }
      }
      result.push(1);
    }
    return result;
}
const places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
console.log(solution(places));
