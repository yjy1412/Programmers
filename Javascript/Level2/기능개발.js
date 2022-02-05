function solution(progresses, speeds) {
    
  // 1. 작업분량을 담은 배열과 리턴할 결과를 담을 배열을 만든다.
  const workDays = progresses.map((progress, idx) => {
      return Math.ceil((100 - progress) / speeds[idx]);
  })
  const result = [];
  // 2. 더 이상 대기작업이 없을 때까지 아래의 과정을 반복한다. 
  while(workDays.length !== 0) {
      // 2-1. 헤드를 설정한다.
      let head = workDays.shift();
      let count = 1;
      // 2-2. 헤드 보다 작으면 모두 제거한다.
      while (workDays[0] <= head) {
          workDays.shift();
          count ++;
      }
      // 2-3. 헤드 보다 크면, 그때까지의 카운트를 결과배열에 담고 다음으로 넘어간다.
      result.push(count);
  }
  return result
}