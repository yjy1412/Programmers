function solution(msg) {
  
  // 길이 1인 알파벳의 색인번호를 지정한다.
  const dictionary = [false];
  for (let i = 65; i < 91; i++) {
      const letter = String.fromCharCode(i);
      dictionary.push(letter);
  }
  // console.log(dictionary)
  
  const result = [];
  for (let i = 0; i < msg.length; i++) {
      let word = msg[i];
      let idx = dictionary.indexOf(word);
      let addedWord = word + msg[i+1]
      let addedIdx = dictionary.indexOf(addedWord)
      
      // 만약, 문자를 추가한 단어가 사전에 이미 있는 단어라면, 아래의 과정을 반복해라.
      while (addedIdx !== -1) {
          // 추가한 단어가 현재 단어가 된다.
          word = addedWord;
          idx = addedIdx;
          // 검색 인덱스를 1 증가시킨다(추가한 단어만큼 인덱스를 추가시킴)
          i ++;
          // 추가한 단어에서 다시 addedWord와 addedIdx를 도출한다.
          addedWord = addedWord + msg[i+1];
          addedIdx = dictionary.indexOf(addedWord);
      }
      // 문자를 추가한 단어가 사전에 없는 단어라면,
      // 문자를 추가한 단어를 사전에 등록한다.
      dictionary.push(addedWord);
      // 현재 단어의 색인번호를 결과배열에 저장한다.
      result.push(idx);
  }
  return result;
}