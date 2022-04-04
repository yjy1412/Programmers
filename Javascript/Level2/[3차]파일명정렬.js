function solution(files) {
  // 입력된 files 배열의 요소들을 정해진 규칙에 따라 정렬해라.
  // 각 파일은 영문 대소문자, 숫자, 공백, 마침표, 빼기부호만으로 이루어졌다.
  // 영문자로 시작하며, 숫자를 하나 이상 포함한다.
  // 파일명은 HEAD, NUMBER, TAIL로 구성된다.
  // HEAD: 문자로만 이루어짐. 최소한 한 글자 이상
  // NUMBER: 0 ~ 00000(5개)사이의 숫자
  // TAIL: 그 나머지 부분.
  
  // 정렬의 기준
  // 1. HEAD부분을 기준으로 사전 순으로 정렬한다.(대소문자 구분 x)
  // 2. NUMBER의 숫자 순으로 정렬한다
  // 3. 1과 2가 같은 경우, 원래 입력된 순서를 유지한다.
  
  const regex = /(^[^\d]+)(\d{1,5})(.*)/i
  files.sort((file1, file2) => {
      const match1 = file1.match(regex);
      const match2 = file2.match(regex);
      let [data1, head1, number1, tail1] = match1;
      let [data2, head2, number2, tail2] = match2;
      head1 = head1.toUpperCase();
      head2 = head2.toUpperCase();
      number1 = Number(number1);
      number2 = Number(number2);
      if (head1 !== head2) {
          return head1.localeCompare(head2)
      } else {
          return number1 - number2
      }
  });
  return files
}