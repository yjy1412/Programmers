// Level 1
// Javascript

function solution(new_id) {
  // 1. 1단계 : 모든 대문자를 소문자로 치환한다.
  let result = new_id.toLowerCase();
  // 2. 2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 이외는 모두 제거한다.
  // 2-1. 정규 표현식
  const regex = /[\w\-\.]+/;
  /* 
  [ 정규표현식 레퍼런스]
  참고용: https://github.com/dream-ellie/regex
  연습용: https://regexone.com/
  */
  // 2-2. new_id를 배열로 변환하고, 정규표현식과 고차함수(filter)를 통해 허용문자 이외는 제외한다.
  const arr = result.split('');
  const filtered = arr.filter(letter => {
      return regex.test(letter);
  })
  result = filtered.join('');
  console.log(result)
  // 3. 3단계 : 마침표(.)가 연속되는 경우, 하나의 마침표(.)로 치환한다.
  result = result.replace(/\.+/g,".")
  console.log(result);
  
  // 4. 4단계 : 마침표(.)가 처음과 끝에 존재한다면 제거한다.
  if ( result[0] === ".") {
    result = result.slice(1);
  }
  if ( result[result.length - 1] === ".") {
    result = result.slice(0, result.length-1);
  }
  // 5. 5단계 : 지금까지의 필터결과가 빈 문자열일 경우, "a"를 대입한다.
  if ( result === '' ) {
    result = "a";
  }
  // 6. 6단계 : 문자열은 15개까지만 허용한다.
  if ( result.length >= 16 ) {
    result = result.slice(0,15); // 15개 문자 추출이므로, 인덱스는 14까지만,
    // 6-1. 만약 제거 후, 마침표(.)가 끝에 위치한다면 제거한다.
    if (result[14] === ".") {
      result = result.slice(0,14);
    }
  //7. 7단계 : 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복한다.
  } else if ( result.length <= 2 ) {
      let lastLetter = result[result.length-1];
      result = result + lastLetter.repeat(3-result.length);
  }
  console.log(result);
  return result;
}