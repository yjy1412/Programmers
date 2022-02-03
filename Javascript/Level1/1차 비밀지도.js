function solution(n, arr1, arr2) {
  // 1. 정수인 두 배열 arr1, arr2을 이진법의 수로 나타낸다.
  const len = arr1.length;
  const map1 = arr1.map(val => {
      const temp = [];
      while(val > 0) {
          temp.unshift(val % 2);
          val = Math.floor(val / 2);
      }
      while(temp.length !== len) {
          temp.unshift(0);
      }
      return temp;
  })
  const map2 = arr2.map(val => {
      const temp = [];
      while(val > 0) {
          temp.unshift(val % 2);
          val = Math.floor(val / 2);
      }
      while(temp.length !== len) {
          temp.unshift(0);
      }
      if (temp.length !== len) { temp.unshift(0) }
      return temp;
  })
  // console.log(map2)
  // 2. 만들어진 이진 2차원 배열 두 개의 인덱스를 비교하여 전체 지도(map)배열을 완성한다.
  // 2-0. 전체 지도(map)은 아래의 두 조건으로 완성된다.
  // 2-1. 두 값 중 어느 하나라도 1이면 값은 1이다.
  // 2-2. 두 값 모두 0이라면 값은 0이다.
  const secretMap = map1.map((arr, row) => {
      return arr.map((num, col) => {
          if (num === 0 && map2[row][col] === 0) {
              return 0
          } else return 1;
      })
  })
  // console.log(secretMap);
  // 3. 1에 해당하는 값은 '#', 0에 해당하는 값은 ' '(공백)으로 변환 후 리턴한다.
  return secretMap.map((row, idx) => {
      return row.reduce((str, num) => {
          if (num === 1) { return str.concat('#') }
          else { return str.concat(' ') }
      }, '')
  })
}