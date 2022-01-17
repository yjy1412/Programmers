function solution(numbers) {
  const result = [];
  const check = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for ( let i = 0; i < check.length; i ++ ) {
      const selected = check[i];
      if ( !numbers.includes(selected) ) {
          result.push(selected);
      }
  }
  return result.reduce((sum, num) => { return sum + num })
}