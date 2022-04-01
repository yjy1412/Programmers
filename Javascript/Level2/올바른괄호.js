function solution(s){
  // 이전 문자가 "("라면, 다음 문자는 "(", ")" 모두 올 수 있다.
  // 이전 문자가 ")"라면, 다음 문자는 "(", ")" 모두 올 수 있다.
  // 이전 문자가 ")"이고, 아직 없애야할 "("가 남았는데 "("가 또 나올 경우 이는 거짓이다.
  const stack = [];
  for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      if (letter === "(") {
          stack.push(letter);
      } else {
          if (stack.length === 0) { return false; }
          else {
              stack.pop();
          }
      }
  }
  return stack.length === 0 ? true : false;
}