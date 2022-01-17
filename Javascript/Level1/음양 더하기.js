function solution(absolutes, signs) {
  let result = 0;
  for ( let i = 0; i < absolutes.length; i ++ ) {
      const absoluteNum = absolutes[i];
      const sign = signs[i];
      let num;
      if ( sign ) { num = absoluteNum }
      else { num = - absoluteNum};
      result = result + num;
  }
  return result;
}