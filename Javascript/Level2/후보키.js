function solution(relation) {
  // 후보키의 개수를 구하는 문제이다.
  // 1. 후보키란 각 튜플을 유일하게 식별할 수 있는 속성을 말한다.
  // 유일하게 식별할 수 있다는 뜻은 모든 튜플에서 유일한 값이라는 것을 의미한다.
  // 2. 후보키란 모든 튜플을 유일하게 식별하는데 꼭 필요한 속성들로만 구성되어야 한다.

  // [ 수도코드 ]
  // 1. 속성을 고를 수 있는 경우의 수를 만든다.
  // 1개를 고르는 경우, 2개를 고르는 경우, ... 반복되어야 한다.
  const colLen = relation[0].length;
  const column = [];
  for (let i = 0; i < colLen; i++) {
    column.push(i);
  }
  // 조합을 만드는 로직
  let combination;
  const calCombination = (arr, count, bucket) => {
    // 선택에 있어 순서를 고려하지 않는다.
    // 선택에 있어 중복을 허용하지 않는다.
    if (count === 0) {
      combination.push(bucket);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const pick = arr[i];
        const slice = arr.slice(i+1);
        calCombination(slice, count-1, bucket.concat(pick))
      }
    }
  }
  // console.log(combination)

  // 선택된 속성이 튜플을 유일하게 식별하는지 여부를 확인하는 로직
  const isKey = (colArr) => {
    const temp = [];
    for (let row = 0; row < relation.length; row++) {
      let str = ''
      for (let i = 0; i < colArr.length; i++) {
        const col = colArr[i];
        const val = relation[row][col];
        str += val;
      }
      // 해당 조합이 기존에 없던 조합이면 temp에 담는다.
      // 해당 조합이 기존에 있는 조합이면 false를 리턴한다.
      if (!temp.includes(str)) { temp.push(str) }
      else return false;
    }
    // 모든 탐색을 거치면서 중복되는 값이 없었다면 true를 리턴한다.
    return true;
  }

  const result = [];
  for (let i = 1; i <= colLen; i++) {
    // 선택하는 속성의 가지 수를 선택한다.
    const pickCount = i;
    // 선택 속성 가지수에 따른 속성의 부분집합을 만든다.
    combination = [];
    calCombination(column, pickCount, []);
    // 선택가능한 속성 부분집합 중 최소성을 만족시키지 못하는 집합은 제거한다.(최소성 만족여부 검토)
    result.forEach(colArr => {
      combination = combination.filter(el => {
        // 키 속성을 모두 포함하고 있다면, 이는 최소성을 만족하지 못한다.
        for (let i = 0; i < colArr.length; i++) {
          const col = colArr[i];
          if (!el.includes(col)) {
            // 속성조합에서 하나라도 키 속성을 갖고 있지 않다면, 이는 최소성을 만족한다.
            return true;
          }
        }
        // 속성조합에서 모든 키 속성을 갖고 있을 경우, 이는 최소성을 만족하지 못한다.
        return false;
      })
    })
    // 각 속성 부분집합별로 튜플을 유일하게 식별하는지 판별한다.
    for (let k = 0; k < combination.length; k++) {
      const combi = combination[k];
      if (isKey(combi)) { result.push(combi) }
    }
  }
  // 3. 2의 결과로 만들어진 속성 리스트의 길이를 리턴한다.
  return result.length;
}

const relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];
console.log(solution(relation));