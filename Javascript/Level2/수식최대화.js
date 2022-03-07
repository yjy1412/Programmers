function solution(expression) {
  // 1. 현재 사용되는 연산자 확인
  const regex = /(\D)/g;
  const operations = [...new Set(expression.match(regex))];
  
  // 2. 사용되는 연산자로 선택가능한 순열조합 계산
  let cases = [];
  const cal_permutation = (operations, bucket) => {
      if (operations.length === 0) {
          cases.push(bucket);
      }
      for (let i = 0; i < operations.length; i++) {
          const pick1 = operations[i]
          const others = [...operations.slice(0,i), ...operations.slice(i+1)]
          cal_permutation(others, bucket.concat(pick1))
      }
  }
  cal_permutation(operations, []);
  
  // 3. expression 문자열에서 숫자와 연산자를 구분하여 리스트 정리
  const split = expression.split(regex);
  console.log(split);
  
  let result = 0;
  for (let i = 0; i < cases.length; i++) {
      const caseOne = cases[i];
      let temp = split.slice();
      for (let j = 0; j < caseOne.length; j++) {
          const operator = caseOne[j];
          while(temp.includes(operator)) {
              // 1. 일치하는 연산자를 split 배열에서 찾는다.
              const idx = temp.indexOf(operator);
              
              // 2. 해당 연산자 인덱스 앞뒤 숫자를 해당 연산자로 계산한다.
              const num1 = temp[idx-1];
              const num2 = temp[idx+1];
              const val = eval(num1+operator+num2);
              
              // 3. 그 값을 반영하여 temp에 기록한다.
              temp = [...temp.slice(0,idx-1), val, ...temp.slice(idx+2)]
          }
      }
      const absVal = Math.abs(temp[0]);
      result = Math.max(absVal, result);
  }
  return result;
}
const expression = "100-200*300-500+20";
console.log("expression", expression);
console.log(solution(expression))