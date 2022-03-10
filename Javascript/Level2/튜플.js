function solution(s) {
  // 1. 문자열을 배열로 만든다.
  const regex = /{|}/g
  // console.log(s.match(regex))
  const replaced = s.replace(regex, matched => matched === "{" ? "[" : "]");
  const arr = JSON.parse(replaced);

  // 2. 각 원소배열의 길이 별로 정렬한다.
  const result = [];
  arr
    .sort((a, b) => a.length - b.length)
    .forEach(el => {
      // 중복되지 않은 값을 추출한다.
      for (let i = 0; i < el.length; i++) {
        const val = Number(el[i]);
        if (!result.includes(val)) {
          result.push(val);
          break;
        }
      }
    })
  // console.log(result);
  return result;
}

const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}"
console.log(solution(s));