function solution(s) {
  // 올바른 괄호 문자열인지 확인하는 로직
  // 1. (), [], {}인 경우, 이를 A로 변환한다.
  const regex1 = /\(\)|\[\]|\{\}/g
  // 2. (A), [A], {A}인 경우, 이를 A로 변환한다.
  // 3. AA인경우, A로 변환한다.
  const regex2 = /\(A+\)|\[A+\]|\{A+\}/g
  const regex3 = /[^A]/g
  // 4. A이외의 문자가 있는 경우, False / 없는 경우, True를 반환한다.
  const isRight = (s) => {
      // 재귀로 돌린다면, 탈출조건을 어떻게 해야할까?
      // 조건1. 입력된 문자열이랑, 변경된 문자열이 같은 경우(즉, 변함이 없는 경우)
      const s1 = s.replace(regex1, "A");
      const s2 = s1.replace(regex2, "A");
      
      if (s === s2) {
          // console.log(s)
          return s2.search(regex3) === -1 ? true : false
      } else {
          return isRight(s2)
      }
  }
  
  // 주어진 문자열 s를 왼쪽으로 한 칸씩 이동시키는 로직
  const moveToLeft = (s) => {
      const len = s.length;
      let count = 0;
      let changed = s.slice();
      let range = len-1;
      // 변경하기전 올바른가?
      if (isRight(changed)) { count++ }
      // 변경하면서 올바른지 확인하는 로직
      while (range > 0) {
          // 0번째 인덱스 문자열을 마지막 인덱스로 보낸다.
          const first = changed[0];
          changed = changed.slice(1) + first;
          // console.log(changed)
          if (isRight(changed)) { count++ };
          range--;
      }
      return count;
  }
  return moveToLeft(s)
}