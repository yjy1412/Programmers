function solution(str1, str2) {
  // 1. 들어온 문자를 모두 대문자로 변환시켜준다.
  const upperStr1 = str1.toUpperCase();
  const upperStr2 = str2.toUpperCase();
  console.log(upperStr1, upperStr2)

  // 2. 두 글자씩 끊어 다중집합의 원소로 만든다.
  // 이때, 영문자 이외의 글자를 포함하는 원소는 제거한다.
  const regex = /[^A-Z]/g
  const makeArr = (str) => {
    let temp = [];
    for (let i = 0; i < str.length - 1; i++) {
      const el = str[i] + str[i + 1];
      if (el.match(regex) === null) { temp.push(el) }
    }
    return temp;
  }
  const str1Arr = makeArr(upperStr1);
  const str2Arr = makeArr(upperStr2);
  console.log(str1Arr, str2Arr);

  // 만약, 두 다중집합이 모두 공집합인 경우, 65536값을 리턴해라.
  if (str1Arr.length === 0 && str2Arr.length === 0) { return 65536; }

  // 3. 두 다중집합의 교집합과 합집합의 개수를 구한다.
  // 3-1. 교집합 개수를 구한다.
  let val1 = 0;
  for (let i = 0; i < str1Arr.length; i++) {
    const el = str1Arr[i];
    if (str2Arr.includes(el)) {
      // 교집합 개수를 더한다.
      // 두 집합에서 제거한다.
      // 검색 인덱스 조정
      val1++;
      str1Arr.splice(i, 1);
      str2Arr.splice(str2Arr.indexOf(el), 1);
      i--;
    }
  }
  // 3-2. 합집합의 개수를 구한다.
  const val2 = str1Arr.length + val1 + str2Arr.length;

  // 4. 두 집합의 원소갯수를 계산하여 자카드 유사도를 구한다.
  // 5. 유사도 값에 65536을 곱한 후, 소수점 아래를 버린 값을 반환한다.
  return parseInt(val1/val2 * 65536);
}

const str1 = "E=M*C^2";
const str2 = "e=m*c^2";
console.log(solution(str1, str2));