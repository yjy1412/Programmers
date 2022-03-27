function solution(numbers) {
  // 1. 주어진 수를 이진수로 표기한다.
  // 2. 주어진 수보다 큰 수를 대상으로 아래의 과정을 반복한다.
  // 2-1. 현재 수를 이진수로 표기한다.
  // 2-2. 주어진 수와 현재 수를 비교하여 서로 다른 수가 2개 이하인지 확인한다.
  // 2-3. 2개 이하라면, 해당 수를 리턴한다.
  // 2-4. 2개 초과라면, 현재 수에 1을 더하여 위의 과정을 반복한다.
  
  
  // 주어진 수를 이진수로 표기하는 로직
  const convertToBinary = (num) => {
      let result = '';
      let remain;
      let quotient;
      // while 조건 : 몫이 0인 경우.
      // 2로 나누어 그 나머지를 result에 저장한다.
      do {
          remain = num % 2; // 나머지
          quotient = Math.floor(num / 2); // 몫
          num = quotient;
          result = remain + result;
      } while (num !== 0)
      return result;
  }
  // [ Test1 Code ]
  // const testResult1 = convertToBinary(9)
  // console.log(testResult1);
  
  // 두 이진수를 비교하여, 서로 다른 비트가 2개 이하인지 확인하는 로직
  const compareTwoStr = (str1, str2) => {
      // 1. 두 문자열 중 더 긴 문자열에 길이를 맞춘다.
      // 2. 길이가 같은 두 문자열 중 서로 다른 문자열의 갯수를 찾는다.
      // 3. 2개 이하인지 확인한다.
      // 4. 2개 이하라면, true / 아니라면, false;
      
      // 1. 두 문자열 중 더 긴 문자열에 길이를 맞춘다.
      // 두 문자열중 더 긴 문자열의 길이를 구한다.
      const maxLen = Math.max(str1.length, str2.length);
      // 해당 길이만큼 0을 추가하여 문자열을 만든다.
      const addZero = (str, maxLen) => {
          const count = maxLen - str.length;
          for (let i = 0; i < count; i++) {
              str = "0" + str;
          }
          return str;
      }
      str1 = addZero(str1, maxLen);
      str2 = addZero(str2, maxLen);
      // console.log(str1, str2);
      
      // 2. 두 문자열 중 서로 다른 문자열의 갯수를 구한다.
      let count = 0;
      for (let i = 0; i < maxLen; i++) {
          const letter1 = str1[i];
          const letter2 = str2[i];
          if (letter1 !== letter2) { count++; }
      }
      // console.log(count);
      // 3. count의 값에 따라, 참/거짓을 리턴한다.
      return count <= 2
  }
  // [ Test2 Code ]
  // const t2Exam1 = "1011";
  // const t2Exam2 = "1001011";
  // const testResult2 = compareTwoStr(t2Exam1, t2Exam2);
  // console.log(testResult2);
  
  // 메인
  const result = [];
  const main = () => {
      numbers.forEach(num => {
          const bits = convertToBinary(num);
          // compareTwoStr(str1, str2)
          // 최초로 서로 다른 비트가 2개 이하인 숫자를 찾을 때까지 반복한다.
          let isFinished = false;
          while (isFinished === false) {
              num ++;
              const bits2 = convertToBinary(num);
              if (compareTwoStr(bits, bits2)) { 
                  result.push(num);
                  isFinished = true;
              }
          } 
      })
  }
  main();
  return result;
}

function solution(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      const binaryNum = "0" + num.toString(2);
      // console.log(binaryNum)
      const len = binaryNum.length;
      // 1. 마지막이 0인 경우, 해당 0을 1로 바꾼다.
      if (num % 2 === 0) { result.push(num+1) }
      else {
          // 2. 마지막이 0이 아닌 경우
          // 3. 뒤에서 부터 0인 경우를 찾아 "10"으로 바꿔준다.
          const idx = binaryNum.lastIndexOf("0");
          result.push(parseInt(`${binaryNum.slice(0, idx)}10${binaryNum.slice(idx + 2)}`, 2))
      }
  }
  return result;
}