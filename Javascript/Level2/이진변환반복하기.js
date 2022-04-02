function solution(s) {
  let count = 0;
  let zeroCount = 0;
  // 1. 값이 1이 될 때까지 반복한다.
  while (s !== "1") {
      let temp = 0;
      for (let i = 0; i < s.length; i++) {
          const letter = s[i];
          if (letter === "0") { zeroCount ++ }
          else { temp ++ }
      }
      s = temp.toString(2);
      count ++;
  }
  return [count, zeroCount]
}