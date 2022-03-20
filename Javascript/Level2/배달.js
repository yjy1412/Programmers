function solution(N, road, K) {
  // 1. 탐색하고자 하는 노드를 정한다.
  // 2. 해당 노드까지의 최단 경로를 구한다.
  // 3. 최단 경로에서 걸리는 시간을 계산하다.
  // 4. 소요 시간이 제한 시간(k)보다 작을 경우, 카운트한다.
  let count = 0;
  // 0. road정보를 바탕으로 그래프를 만든다.
  const map = {};
  road.forEach(el => {
      const [start, end, time] = el;
      if (map[start] === undefined) {
          map[start] = {};
          map[start][end] = [time];
      } else {
          map[start][end].push(time);
      }
      
      if (map[end] === undefined) {
          map[end] = {};
          map[end][start] = [time];
      } else {
          map[end][start].push(time)
      }
      
  })
  console.log(map)
  return count;
}
const N = 5;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]	;
const K = 3;
solution(N, road, K)