function solution(numbers) {
  const numToStr = numbers.map(el => el + '');
  // a = 3, b = 30, a + b = 330, b + a = 303 
  const result = numToStr.sort((a, b) => (b + a) - (a + b)).join('');
  return result[0] === '0' ? '0' : result
}