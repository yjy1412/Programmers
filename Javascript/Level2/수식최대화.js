function solution(expression) {
  // console.log(expression);
  // 1. 연산자 집합 = (+, -, *)
  // 2. 결과값이 음수라면, 해당 값은 절댓값으로 변환한 값이 반영된다.


  // 1. expression 내에서 연산자를 뽑아낸다.
  const regex = /\D/g
  const operations = [...new Set(expression.match(regex))];
  // console.log(operations);
  
  // 2. 가능한 연산자 순서의 조합은 만든다.
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
  // console.log(cases);

  // 1. 해당 연산자 양 옆의 숫자를 뽑는다.
  // const example = "100+200+100+300"
  // const operation = "+"
  // const regex2 = new RegExp(`\\d\{1\,3\}\\${operation}\\d\{1\,3\}`, "g");
  // const temp = example.match(regex2);
  // console.log(temp);
  
  // 2. 뽑은 두 숫자의 해당 연산자로 계산한 결과를 반영한다.
  // const temp = example.replace(regex2, (result) => {
  //   const nums = result.split(operation);
  //   return nums.reduce((sum, el) => Number(sum) + Number(el));
  // })
  // console.log(temp);

  // 해당하는 연산자 양 옆의 숫자를 연산한 결과를 반영하는 알고리즘
  const findAndOperate = (operation, expression) => {
    const regex = new RegExp(`\-\?\\d\{1\,\}\\${operation}\-\?\\d\{1\,\}`);
    const result = expression.replace(regex, matched => {
      //console.log("matched", matched);
      const first = matched[0];
      const nums = matched.split(operation).map(el => Number(el));
      // console.log("nums", nums)
      
      if (operation === "+") { return nums[0] + nums[1]}
      else if (operation === "-") { 
        if (nums.length > 2) {
          return nums[1] - nums[2]
        }
        return nums[0] - nums[1]
      }
      else { return nums[0] * nums[1]}
    })
    // console.log("result", result);
    return result;
  }
  // const temp = "100-200*-700";
  // const operation = "*"
  // console.log(findAndOperate(operation, temp))
  
  // 3. 위의 과정을 반복한다.
  let result = 0;
  for (let i = 0; i < cases.length; i++) {
    const caseOne = cases[i];
    let temp = expression
    for (let j = 0; j < caseOne.length; j++) {
      const operation = caseOne[j];
      // 해당 연산을 수행한다.
      let prev = temp;
      let isChanged = true;
      while(isChanged === true) {
        const now = findAndOperate(operation, prev);
        if (prev === now) { isChanged = false; }
        else { prev = now; }
      }
      temp = prev;
    }
    // 모든 연산이 끝났을 때 절댓값을 구해준다.
    // console.log("temp", temp);
    const val = Math.abs(Number(temp));
    // 해당 값이 기존의 결과값보다 크다면 이를 갱신해준다.
    result = Math.max(val, result);
  }
  // 4. 결과를 리턴한다.
  return result;
}
const expression = "100-200*300-500+20";
console.log("expression", expression);
console.log(solution(expression))