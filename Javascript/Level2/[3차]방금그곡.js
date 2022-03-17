function solution(m, musicinfos) {
  // 시작시간과 끝시간의 분 계산 로직
  const timeCount = (start, end) => {
      const startArr = start.split(":");
      const endArr = end.split(":");
      const [startHour, startMinute] = startArr;
      const [endHour, endMinute] = endArr;
      
      const hourCount = Number(endHour) - Number(startHour);
      const endCount = Number(endMinute) - Number(startMinute);
      
      return hourCount * 60 + endCount;
  }
  
  // 런타임동안 재생된 멜로디 추출 로직
  const makeMelody = (minute, melody) => {
      let result = '';
      let idx = 0;
      while(minute > 0) {
          // 기본 멜로디보다 작을 경우.
          if (idx < melody.length) {
              if (melody[idx+1] === "#") {
                  result += melody.slice(idx,idx+2);
                  idx++;
              } else {
                  result += melody[idx];
              }
          } else {
          // 기본 멜로디보다 길 경우.
              idx = 0;
              if (melody[idx+1] === "#") {
                  result += melody.slice(idx,idx+2);
                  idx++;
              } else {
                  result += melody[idx];
              }
          }
          idx++;
          minute--;
      }
      return result;
  }
  
  // 메인
  const main = () => {
      const result = ["(None)", 0];
      for (let i = 0; i < musicinfos.length; i++) {
          const musicinfo = musicinfos[i].split(',');
          const [start, end, title, melody] = musicinfo;
          // console.log(musicinfo)
          const runningTime = timeCount(start, end);
          // console.log(runningTime)
          const totalMelody = makeMelody(runningTime, melody);
          // console.log(totalMelody);
          const regex = new RegExp(`${m}(?!#)`, "i");
          const searchResult = totalMelody.search(regex);
          // console.log(searchResult)
          if (totalMelody.search(regex) !== -1) {
              // 찾고자 하는 멜로디를 포함하는 경우.
              // 1. 재생시간을 비교해 긴 음악 제목을 반환함.
              // 2. 재생시간이 같은 경우, 먼저 입력된 음악 제목을 반환함.
              if (runningTime > result[1]) {
                  result[0] = title;
                  result[1] = runningTime
              }
          }
      }
      return result[0];
  }
  return main();
}