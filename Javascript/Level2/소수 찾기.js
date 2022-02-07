function solution(numbers) {
    
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
      arr.push(numbers[i])
  }
  // console.log(arr)
  
  const isPrime = (num) => {
      const sqrt = Math.sqrt(num);
      const floor = Math.floor(sqrt);
      
      if (num < 2) { return false; }
      for (let i = 2; i <= floor; i++) {
          if (num % i === 0) {
              return false;
          }
      }
      return true;
  }
  let result = [];
  const cal_permutation = (arr, len, bucket) => {
      if (len === 0) {
        const parsed = parseInt(bucket.join(''), 10);
        if (!result.includes(parsed) && isPrime(parsed)) {
          result.push(parsed)
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          const picked = arr[i];
          const queue = [...arr.slice(0, i), ...arr.slice(i+1)];
          cal_permutation(queue, len - 1, bucket.concat(picked))
        }
      }
  }
  for (let i = 1; i <= arr.length; i++) {
    cal_permutation(arr, i, []);
  }
  // console.log(result);
  return result.length;
}