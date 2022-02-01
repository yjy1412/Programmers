function solution(n) {
    
  const result = [];
  while(n > 0) {
      result.unshift(Math.floor(n % 3));
      n = Math.floor(n / 3);
  }
  return result.reduce((acc, cur, idx) => {
    return acc + cur * Math.pow(3, idx)
  })
}