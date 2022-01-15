// const id_list = ["muzi", "frodo", "apeach", "neo"];
// const report = ["muzi frodo","muzi frodo", "apeach frodo","frodo neo","muzi neo","apeach muzi"]
// const k = 2

function solution(id_list, report, k) {
  const result = [];

  const user_count_list = {}; // 유저 별 신고받은 횟수
  const user_report_list = {}; // 유저 별 신고 현황
  for ( let i = 0; i < id_list.length; i ++ ) {
    user_report_list[id_list[i]] = [];
      user_count_list[id_list[i]] = 0;
  }
  // console.log(user_report_list);
  // console.log(user_count_list);
  
  for ( let i = 0; i < report.length; i ++ ) {
    const reportCase = report[i].split(" ");
      const key = reportCase[0];
      const value = reportCase[1];
    
      if ( !user_report_list[key].includes(value) ) {
          user_report_list[key].push(value);
          user_count_list[value] ++;
      }
  }
  // console.log("유저별 신고 현황", user_report_list);
  // console.log("유저별 신고받은 횟수", user_count_list);
  
  // [ 블랙리스트 생성 ]
  const blacklist = [];
 
  for ( const userId in user_count_list ) {
    if ( user_count_list[userId] >= k ) {
      blacklist.push(userId);
    }
  }
  // console.log("블랙리스트", blacklist);
  
  // [ 블랙리스트에 해당하는 id를 신고한 유저에게 결과 메일 발송 ]
  for ( const userId in user_report_list ) {
    let count = 0;
    for (let i = 0 ; i < user_report_list[userId].length; i ++ ) {
      const checkId = user_report_list[userId][i];
      if ( blacklist.includes(checkId) ) {
        count ++;
      }
    }
    result.push(count);
  }
  return result;
}
// console.log(solution(id_list, report, k));