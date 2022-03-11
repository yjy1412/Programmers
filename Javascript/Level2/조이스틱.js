function solution(name) {

  // 1. 왼쪽으로 갈지, 오른쪽으로 갈지 결정한다.
  // 1-1. 알파벳 A-Z까지를 만든다.
  const map = [];
  for (let i = 65; i <= 90; i++) {
    map.push(String.fromCharCode(i));
  }
  console.log(map);

  // 중간 알파벳은 14번째 인덱스의 값이 "n"이다.
  // 왼쪽, 오른쪽을 결정하는 기준은 알파벳 A가 어디에 있는지이다.
  // 방문이 필요한 인덱스와 그렇지 않은 인덱스를 정리한다.
  // 다음에 도달할 문자와의 길이를 서로 비교한다면?
  // 1. 현재 인덱스에서 오른쪽에 A가 아닌 문자가 존재한다면 해당 문자와의 거리를 계산한다.
  // 현재 인덱스 정보를 저장한다. 방문한 인덱스도 저장한다.
  // 왼쪽으로 거리를 구한다.
  // 오른쪽으로 거리를 구한다.
  // 2. 마찬가지로 왼쪽 거리를 계산한 후, 두 길이 중 더 짧은 거리를 구한다.

  // 1. 방문이 필요한 인덱스 정보를 만든다.
  const indexMap = new Array(name.length).fill(0);
  for (let i = 0; i < name.length; i++) {
    const letter = name[i];
    if (letter !== "A") { indexMap[i] = 1 }
  }
  console.log(indexMap);

  // 2. 본격적으로 탐색하며, 이동횟수를 계산한다.
  let idx = 0;
  let result = 0;
  while (indexMap.includes(1)) {
    // 현재 위치에서 알파벳을 변경한다.
    const letter = name[idx];
    result += moveUpdown(letter);
    // 현재 위치를 탐색했음을 저장한다.
    indexMap[idx] = 0;
    // 좌/우 다음으로 이동해야할 거리를 비교하여 이동한다.
    const [distance, nextIdx] = moveSide(idx, indexMap);
    result += distance;
    idx = nextIdx;
    // 더 이상 이동해야할 곳이 없다면 반복을 종료하고 그 결과를 반환한다.
    if (distance === 0) { break; }
  }
  return result;

  function moveSide(cur, map) {
    if (!map.includes(1)) { return [0, 0] }
    // 좌/우로 움직였을때, 다음으로 이동해야할 인덱스 정보를 담는다.
    // 0 인덱스에는 좌로 움직였을때의 다음 인덱스, 1 인덱스에는 우로 움직였을때의 다음 인덱스 정보를 담는다.
    // 2 인덱스는 방향(좌/우)를 나타내며, 0일경우 좌, 1일경우 우를 의미한다.
    const temp = [0, 0];
    // 좌로 움직일때의 거리를 구한다.
    // 1. 현재위치에서 첫 인덱스(0)까지 탐색하며 1인 경우를 찾는다.
    let leftDistance = 0;
    let len = map.length;
    for (let i = cur; i >= 0; i--) {
      if (map[i] === 1) {
        leftDistance += cur - i
        temp[0] = i;
        break;
      }
    }
    // 2. 1의 범위에서 찾지 못했다면, 마지막 인덱스부터 1인 경우를 찾는다.
    if (leftDistance === 0) {
      for (let i = len - 1; i > cur; i--) {
        if (map[i] === 1) {
          leftDistance += cur + len - i
          temp[0] = i;
          break;
        }
      }
    }
    // 우로 움질일때의 거리를 구한다.
    // 1. 현재위치에서 마지막인덱스까지를 탐색하며 1인 경우를 찾는다.
    let rightDistance = 0;
    for (let i = cur; i < len; i++) {
      if (map[i] === 1) {
        rightDistance += i - cur;
        temp[1] = i;
        break;
      }
    }
    // 2. 1의 범위에서 찾지 못했다면, 첫 인덱스부터 1인 경우를 찾는다.
    if (rightDistance === 0) {
      for (let i = 0; i < cur; i++) {
        if (map[i] === 1) {
          rightDistance += len - cur + i;
          temp[1] = i;
          break;
        }
      }
    }
    // 좌/우의 거리를 비교하여 다음으로 이동할 인덱스와 최소 이동횟수를 반환한다.
    if (leftDistance < rightDistance) {
      return [leftDistance, temp[0]]
    } else if (leftDistance > rightDistance) {
      return [rightDistance, temp[1]]
    } else {
      // 두 거리가 같으면서, 지칭하는 인덱스 또한 같은 경우, 임의로 하나를 결정한다.
      if (temp[0] === temp[1]) { return [leftDistance, temp[0]] }
      
      // 두 거리가 같지만, 지칭하는 인덱스가 다른 경우, 그 다음 이동거리를 계산해본다.
      const mapForLeft = map.slice();
      const mapForRight = map.slice();
      mapForLeft[temp[0]] = 0;
      mapForRight[temp[1]] = 0;
      const [leftDis] = moveSide(temp[0], mapForLeft);
      const [rightDis] = moveSide(temp[1], mapForRight);
      return leftDis < rightDis ? [leftDistance, temp[0]] : [rightDistance, temp[1]]
    }
  }
  console.log("dis", moveSide(2, indexMap));

  // 2. 위로 움직일지, 아래로 움직일지 결정하며, 그에따른 이동횟수를 반환한다.
  function moveUpdown(str) {
    const mid = map.indexOf("N");
    const cur = map.indexOf(str);
    if (cur <= mid) { return cur };
    return 26 - cur
  }
  console.log(moveUpdown("Z"))
}

const name = "BBBAAAAAAAB"
console.log(solution(name));