function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const queue = [];
  const sum = (arr) => {
      return arr.reduce((sum, el) => sum + el)
  }
  
  queue.push(truck_weights.shift());
  time ++;
  
  while (sum(queue) !== 0) {
      // 1. 더 이상 대기 중인 트럭이 없다면, 마지막 트럭이 통과하는 시간을 더해 리턴한다.
      if (truck_weights.length === 0) {
          return time + bridge_length;
      }
      // 2. 다리 끝에 도착한 트럭이 있다면, 해당 트럭을 통과시킨다.
      if (queue.length === bridge_length) {
          queue.shift();
      }
      // 3. 다리 위의 전체 트럭을 전진시킨다.
      queue.push(0);
      
      // 4. 최대 허용무게를 넘지 않는다면, 대기중인 다음 트럭을 다리로 옮긴다.
      const next = truck_weights[0];
      if (sum(queue) + next <= weight) {
        queue[queue.length - 1] = truck_weights.shift();
      } else {
      // 5. 최대 허용무게를 넘는다면, 다리 위의 가장 빠른 트럭이 통과하기 전 까지 다리 위의 모든 트럭을 전진시킨다.
          // 5-1. 현재 다리를 지나는 첫 번째 트럭의 위치를 구한다.
          const firstIdx = queue.findIndex(el => el !== 0);
          // 5-2. 다리의 끝에 도착한 트럭이 아니라면, 그 전까지의 빈 공간을 앞으로의 계산을 위해 제거한다.
          queue.splice(0, firstIdx)
          // 5-2. 첫 번째 트럭이 다리의 끝에 도달하도록 전진시키고, 걸리는 시간을 더한다.
          const timeToReach = bridge_length - queue.length;
          for (let i = 1; i <= timeToReach; i++) {
              queue.push(0);
              time ++;
          };
      }
      // 해당 턴을 종료한다.
       time ++;
  }
  return time;
}