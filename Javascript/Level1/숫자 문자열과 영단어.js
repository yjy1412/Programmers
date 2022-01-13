function solution(s) {
  const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  for ( let i = 0; i < word.length; i ++ ) {
      const regex = new RegExp(word[i], 'g');
      s = s.replace(regex, String(i))
  }
  return Number(s);
}

// 1. 정규표현식 객체를 통해 변수를 사용한 정규표현식을 만들 수 있다.(new RegExp)
// 2. replace 메소드는 정규표현식에 해당하는 문자열을 원하는 문자열로 바꾸는 메소드 이다.
// string.replace(regex(찾고 싶은 문자열), 바꾸길 원하는 문자열)