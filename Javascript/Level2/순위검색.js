function solution(info, query) {
  // 각 스트링 배열을 2차원 배열로 변환한다.
  const infoArr = info.map(el => el.split(" "));
  const queryArr = query.map(el => el.split(" ").filter(el => el !== "and"));
  // console.log(infoArr, queryArr);

  // infoArr에 query를 던지는 반복루프를 만든다.
  const result = [];
  for (let i = 0; i < queryArr.length; i++) {
    const queryOne = queryArr[i];

    let filtered = [...infoArr];
    // console.log(filtered)
    for (let col = 0; col < queryOne.length; col++) {
      const filterVal = queryOne[col]
      // 만약, filterVal가 "-"라면 해당 쿼리는 넘어간다.
      if (filterVal === "-") { continue };

      // 쿼리를 만족하는 지원자 레코드를 뽑아낸다.
      filtered = filtered.filter(row => {
        if (col === 4) { return Number(row[col]) >= Number(filterVal) }
        return row[col] === filterVal
      });
    }
    result.push(filtered.length);
  }
  return result;
}

// [ 테스트 코드 ]
const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];
const test = [1,1,1,1,2,4];

const isComplete = (result) => {
  if (JSON.stringify(result) === JSON.stringify(test)) {
    console.log("테스트를 통과했습니다.")
  } else {
    console.log("테스트를 통과하지 못했습니다", "입력값: ", result, "기댓값: ", test);
  }
}
isComplete(solution(info, query))
console.log(solution(info, query));