function solution(cacheSize, cities) {
  const cacheMemory = [];
  
  // 캐시 교체 알고리즘
  const isCacheMemory = (data, limit) => {
      // Check. 대소문자 구별하지 않음.
      // 데이터가 캐시에 있는지 확인한다.
      // 캐시에 있다면,
      //  해당 캐시를 가장 앞으로 위치한다.
      //  실행시간 1을 리턴한다.
      // 캐시에 없다면,
      //  현재 cashMemory의 크기가 제한되었는지 확인한다.
      //  제한되었다면, 가장 마지막 메모리를 삭제한다.
      //  해당 데이터를 캐시메모리의 가장 앞으로 배열한다.
      //  실행시간 5를 리턴한다.
      if (limit === 0) { return 5 }
      const toUpperStr = data.toUpperCase();
      if (cacheMemory.includes(toUpperStr)) {
          const idx = cacheMemory.indexOf(toUpperStr);
          cacheMemory.unshift(...cacheMemory.splice(idx,1));
          return 1;
      } else {
          if (cacheMemory.length === limit) {
              cacheMemory.pop();
          }
          cacheMemory.unshift(toUpperStr);
          return 5;
      }
  }
  
  let time = 0;
  cities.forEach(el => {
      time += isCacheMemory(el, cacheSize)
  })
  return time;
}