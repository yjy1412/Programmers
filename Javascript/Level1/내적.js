function solution(a, b) {
  return a.reduce((acc, num, index) => { return acc + num*b[index]}, 0)
}