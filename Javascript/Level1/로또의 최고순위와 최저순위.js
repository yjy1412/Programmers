// Level 1
// Javascript

function solution(lottos, win_nums) {
  // 1. 구매한 로또 번호와 당첨 번호를 조회하기 쉽게 오름차순으로 정렬한다.
  lottos.sort((a,b) => a-b);
  win_nums.sort((a,b) => a-b);
  
  let winCount = 0; // 당첨 개수
  let zeroCount = lottos.filter(num => num === 0).length; // 알아볼 수 없는 번호의 개수
  // 2. 올림차순으로 정렬된 로또 번호들 중 0을 제외한 나머지 번호들에 대해 조회한다.
  for ( let i = zeroCount; i < lottos.length; i ++) {
      const num = lottos[i];
      // 2-1. 만약, 조회한 번호가 당첨번호라면 이를 카운트한다.
      if ( win_nums.includes(num) ) {
          winCount ++;
      }
  }
  // 3. 당첨개수별 순위(grade)로 변환한다.
  const grade = (num) => {
    if(num === 6) { return 1 }
    else if(num === 5) { return 2 }
    else if(num === 4) { return 3 }
    else if(num === 3) { return 4 }
    else if(num === 2) { return 5 }
    else return 6
  }
  // 4. 최대 당첨개수는 zeroCount가 모두 당첨되었다고 가정했을 때의 개수이다.(최소는 반대 : 모두 해당하지 않을 때이다.)
  const maxCount = winCount + zeroCount;
  // 5. 최대 / 최소 당첨개수 별 순위를 산출한다.
  const maxGrade = grade(maxCount);
  const minGrade = grade(winCount);
  // 6. 순위를 리턴한다.
  return [maxGrade, minGrade]
}