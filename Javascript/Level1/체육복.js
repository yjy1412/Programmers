function solution(n, lost, reserve) {
    
  // 1. 탐욕 선택 속성을 만족하기 위해, lost를 정렬해준다.
  // ( 빌릴 수 있는 경우의 수는 2가지(앞 번호, 뒷 번호) 이기에, 현재의 선택이 미래의 선택에 영향을 주지 않기 위한 최적의 해를 구하기 위해선 번호가 낮은 도난당한 학생부터 앞 번호의 학생에게 여벌을 빌리는 알고리즘을 써야 한다.)
  const lostSorted = lost.sort((a,b) => a - b);
  // 2. 여벌을 가진 학생이 도난당한 경우를 먼저 처리한다.
  // (여기서부터, lost는 도난당했으며, 현재 체육복이 없는 학생명단을 의미한다.)
  const lostCopy = lostSorted.slice();
  for (let i = 0; i < lostCopy.length; i ++) {
      const lostOne = lostCopy[i];
      if (reserve.includes(lostOne)) {
          const reserveIdx = reserve.indexOf(lostOne);
          reserve.splice(reserveIdx, 1);
          const lostIdx = lostSorted.indexOf(lostOne);
          lostSorted.splice(lostIdx, 1);
      }
  }
  // 3. 현재 체육복이 있는 학생 수를 구한다.
  let count = n - lostSorted.length;
  
  // 4. 도난당한 학생의 경우, 앞 -> 뒷 번호의 학생이 여벌을 갖고 있는 지 확인한다.
  // 5. 여벌을 갖고 있다면, 여벌을 가진 학생명단에서 제거하며, 체육복이 없는 학생명단에서도 제거한다.
  for (let i = 0; i < lostSorted.length; i ++) {
      const lostOne = lostSorted[i];
      if (reserve.includes(lostOne - 1)) {
          const idx = reserve.indexOf(lostOne - 1);
          reserve.splice(idx, 1);
          count ++;
      } else if (reserve.includes(lostOne + 1)) {
          const idx = reserve.indexOf(lostOne + 1);
          reserve.splice(idx, 1);
          count ++;
      }
  }
  return count;  
}