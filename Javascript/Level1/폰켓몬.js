function solution(nums) {
  // 1. nums 매개변수라는 배열의 요소를 모두 탐색하는 과정이 필요하다.
  // 2. 탐색과정 중, 최대의 많은 종류의 폰켓몬을 뽑아야 하므로
  // -> 먼저, nums 폰켓몬 배열내에서 몇 종류의 폰켓몬이 있는 지 확인한다.
  // -> 최대로 뽑을 수 있는 폰켓몬의 수는 nums.length / 2므로, 만약에
  // -> 탐색 도중, 최대로 뽑을 수 있는 폰켓몬의 수가 된다면, 그 즉시 탐색을 중지하고 리턴
  
  // 1. nums 매개변수의 배열내에 모든 요소를 탐색한다.
  const numsLen = nums.length;
  const maxChoice = numsLen / 2;
  
  let bucket = [];
  for(let i = 0; i < numsLen; i += 1) {
      let target = nums[i];
      if ( bucket.length === maxChoice ) {
          break;
      }
      if ( !bucket.includes(target) ) {
          bucket.push(target)
      }
  }
  return bucket.length;
  // 2. 새로운 종류의 폰켓몬을 담을 배열을 선언해, 기존에 탐색되지 않은 폰켓몬이라면 이를 해당 배열에     // 담는다.
  // 3-1. 새로운 종류의 폰켓몬을 담은 배열의 길이가 최대로 선택할 수 있는 폰켓몬의 수와 같아진다면, 그 즉시 리턴한다.
  // 3-2. nums 매개변수의 모든 배열요소에 대한 탐색이 끝났다면 탐색과정을 끝내고, 새로운 종류의 폰켓몬이 담긴 배열의 길이를 리턴한다.
}