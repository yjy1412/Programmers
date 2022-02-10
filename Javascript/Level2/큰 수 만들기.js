function solution(number, k) {
  // 탐욕 알고리즘 : 가장 높은 자리의 수를 가능한 가장 큰 수로 뽑는다.
  // 이를 매 자리 수에서 반복하여 결정한다.
  let result = '';
  let from = 0;
  while (k !== 0 && from < number.length) {
      // 1. 시작 인덱스(from)부터 (k + 1)개를 뽑아 복사한다.
      const slice = number.slice(from, from + k + 1);
      // 2. 해당 조각(slice)에서 가장 큰 수와 그 수의 인덱스를 찾는다.
      let max = 0;
      let maxIdx = 0;
      for (let i = 0; i < slice.length; i++) {
          const num = Number(slice[i]);
          if (num > max) {
              max = num;
              maxIdx = i;
              if (num === 9) { break; }
          }
      }
      if (slice.length !== 1) {
          result = result.concat(String(max));
      }
      from += maxIdx + 1;
      k -= maxIdx;
  }
  return result + number.slice(from)
}