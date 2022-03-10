function solution(info, query) {
  // info 데이터를 해시구조로 만든다.
  const infoObj = {};
  info.forEach(el => {
    const split = el.split(" ");
    const score = Number(split.pop());
    const key = split.join("");

    if (infoObj[key]) { infoObj[key].push(score) }
    else { infoObj[key] = [score] }
  })
  // console.log(infoObj)

  // info 각 키별로 score 리스트를 오름차순으로 정렬한다.
  for (let key in infoObj) {
    infoObj[key].sort((a, b) => a - b)
  }
  // console.log(infoObj);

  // query 리스트를 가져온다
  const keys = Object.keys(infoObj);

  const answer = [];
  query.forEach(q => {
    const queryArr = q.split(" ").filter(el => {
      return el !== "and" && el !== "-"
    });
    const score = Number(queryArr.pop())
    // console.log(queryArr)

    const filtered = keys.filter(key => queryArr.every(val => key.includes(val)));
    // console.log("filter", filtered)

    let temp = 0;
    if (filtered.length !== 0) {
      filtered.forEach(key => {
        temp += infoObj[key].length - bst(infoObj[key], score);
      })
    }
    answer.push(temp);
  })

  function bst(nums, target) {
    let start = 0;
    let end = nums.length;
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] >= target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        }
    }
    return start;
  }
  const temp = [3, 4, 5];
  // console.log("bst result: ", bst(temp, 10))
  return answer;
}

// [ 테스트 코드 ]
const info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];
const test = [1, 1, 1, 1, 2, 4];

const isComplete = (result) => {
  if (JSON.stringify(result) === JSON.stringify(test)) {
    console.log("테스트를 통과했습니다.")
  } else {
    console.log("테스트를 통과하지 못했습니다", "입력값: ", result, "기댓값: ", test);
  }
}
isComplete(solution(info, query))
console.log(solution(info, query));