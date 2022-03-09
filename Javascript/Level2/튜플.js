function solution(s) {
  // 1. 문자열을 배열로 만든다.
  const regex = /\{(\d\,?)+\}/g
  const arr = s.match(regex)
    .map(el => {
      // ","를 기준으로 구분하여 배열을 만든다.
      const temp = el.split(",")
      // 첫 번째 원소와 마지막 원소에 "}"를 제거한 값을 배열에 담는다.
      temp.unshift(temp.shift().slice(1));
      const last = temp.pop();
      temp.push(last.slice(0, last.length - 1));
      return temp;
    })

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