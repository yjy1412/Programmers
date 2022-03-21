function solution(n, words) {
  // 조건1. 이전에 등장했던 단어를 사용할 수 없음.
  // 조건2. 한 글자인 단어는 인정되지 않음.
  // 몇 번째 사람이 몇 번째 단어에서 틀리냐를 리턴해라.
  
  const isUsed = [words[0]];
  for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const prev = words[i-1];
      const condition = isUsed.includes(word) || word[0] !== prev[prev.length-1]
      if (condition) {
          // console.log(word)
          const num = (i+1) % n === 0 ? n : (i+1) % n
          const turn = Math.ceil((i+1) / n);
          return [num, turn]
      }
      isUsed.push(word)
  }
  return [0,0]
}