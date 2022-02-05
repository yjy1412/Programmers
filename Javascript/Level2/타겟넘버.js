function solution(numbers, target) {
    
  let count = 0;
  const choice = [1, -1];
  
  function dfs (numbers, bucket) {
      if (numbers.length === 0) {
          if (bucket.reduce((a,b) => a+b) === target) {
              count ++;
          }
          return;
      };
      const head = numbers[0];
      const tail = numbers.slice(1);
      for (let i = 0; i < choice.length; i++) {
          const putInBucket = bucket.concat(head * choice[i]);
          dfs(tail, putInBucket);
      }
  }
  
  dfs (numbers, []);
  return count;
}