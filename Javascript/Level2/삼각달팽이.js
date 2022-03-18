function solution(n) {
    
  // 1. 탑을 만들 수 있는 틀(프레임)을 만든다.
  // 2차원 배열
  const makeFrame = (n) => {
      const frame = [];
      for (let i = 0; i < n; i++) {
          const floor = new Array(i+1).fill(0);
          frame.push(floor)
      }
      return frame;
  }
  const frame = makeFrame(n);
  // console.log(frame)
  
  // [ 구현이 필요한 메커니즘 ]
  // 기본 값 설정
  let num = 1;
  let row = 0;
  let col = 0;
  frame[row][col] = num;
  
  // 프레임이 완성 되었는지 여부를 저장하는 상태변수
  let isChanged;
  
  // 1. 아래로 이동하는 메커니즘
  const moveToDown = () => {
      // 1. 다음으로 이동한다.
      // 2. 다음 위치의 값이 0이거나, 범위를 넘은 것이 아니라면
      //  해당 위치에 값을 저장한다.
      
      // 다음 인덱스가 범위를 넘어가는 경우
      if (row + 1 > frame.length - 1) { return; }
      do {
          row ++;
          if (frame[row][col] !== 0) {    
              // 다음 인덱스 값이 0이 아닌 경우, 롤백하고 반복을 종료해라.
              row --;
              break;
          }
          num ++;
          frame[row][col] = num;
          isChanged = true;
      } while (row + 1 < frame.length)
  }
  // moveToDown();
  // console.log(frame, row, num)
  
  // 2. 오른쪽으로 이동하는 메커니즘
  // row, col += 1
  const moveToRight = () => {
      const floor = frame[row];
      const len = floor.length;
      // 다음 위치로 이동한다.
      // 다음 위치의 값이 0 또는 undefined라면, 원래 위치로 돌아간다.
      // 다음 인덱스가 범위를 넘어가는 경우
      if (col + 1 > len - 1) { return; }
      do {
         col ++;
         if (floor[col] !== 0) {
             col --;
             break;
         }
         num ++;
         floor[col] = num;
         isChanged = true;
      } while (col + 1 < len)
  }
  // moveToRight()
  // console.log(frame, row, col, num)
  
  // 3. 위로 이동하는 메커니즘
  // row -= 1, col -= 1;
  const moveToUp = () => {
      // 다음 인덱스가 범위를 넘어가는 경우
      if (row - 1 < 0) { return; }
      do {
          row -= 1;
          col -= 1;
          if (frame[row][col] !== 0) {
              row += 1;
              col += 1;
              break;
          }
          num ++;
          frame[row][col] = num;
          isChanged = true;
      } while (row - 1 > 0)
  }
  // moveToUp();
  // console.log(frame, row, col, num)
  
  // 4. main
  const main = () => {
      isChanged = false;
      moveToDown();
      moveToRight();
      moveToUp();
      if (isChanged) { main(); }
  }
  main();
  const result = [];
  frame.forEach(el => { 
      for (let i = 0; i < el.length; i++) {
          result.push(el[i])
      }
  })
  return result;
}