function solution(nums) {
  let result = [];
  for(let i = 0; i < nums.length; i ++) {
      const firstNum = nums[i];
      for(let j = i + 1; j < nums.length; j ++) {
          const secondNum = nums[j];
          for(let k = j + 1; k < nums.length; k ++) {
              const thiredNum = nums[k];
              const totalSum = firstNum + secondNum + thiredNum;
              const sqrtSum = Math.sqrt(totalSum);
              let isPrime = true;
              
              // [ 에라토스테네스의 채 ]
              // 1. 소수 = 1과 자기자신만을 약수로 갖는 수 = 다른 임의의 수의 배수가 아니다.
              // 2. 어떤 수의 제곱근까지 확인했을 때, 배수가 아니라면, 이는 소수이다.
              for (let x = 2; x <= sqrtSum; x ++) {
                  if(totalSum % x === 0) {
                      isPrime = false;
                      break;
                  }
              }
              if (isPrime) {
                  result.push(totalSum)
              }
          }
      }
  }
  return result.length;
}