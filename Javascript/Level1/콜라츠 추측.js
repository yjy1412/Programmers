function solution(num) {
  let count = 0;
  function findOne (num, count) {
      if (count === 500) { return -1; }
      if (num === 1) { return count; }
      if (num % 2 === 0) {
          return findOne(num / 2, count + 1);
      } else {
          return findOne(num * 3 + 1, count + 1);
      }
  }
  return findOne(num, count);
}