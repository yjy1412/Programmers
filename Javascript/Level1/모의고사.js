function solution(answers) {
	let firstCount = 0;
    let secondCount = 0;
    let thiredCount = 0;
    for (let i = 0 ; i < answers.length; i ++) {
    	const answer = answers[i];
      if (i % 5 === 0 && answer === 1) { firstCount ++ }
      else if (i % 5 === 1 && answer === 2) {firstCount ++}
      else if (i % 5 === 2 && answer === 3) {firstCount ++}
      else if (i % 5 === 3 && answer === 4) {firstCount ++}
      else if (i % 5 === 4 && answer === 5) {firstCount ++}
      
      // 21232425
      if(i % 8 === 0 && answer === 2) {secondCount ++}
      else if(i % 8 === 1 && answer === 1) {secondCount ++}
      else if(i % 8 === 2 && answer === 2) {secondCount ++}
      else if(i % 8 === 3 && answer === 3) {secondCount ++}
      else if(i % 8 === 4 && answer === 2) {secondCount ++}
      else if(i % 8 === 5 && answer === 4) {secondCount ++}
      else if(i % 8 === 6 && answer === 2) {secondCount ++}
      else if(i % 8 === 7 && answer === 5) {secondCount ++}
      
      // 3311224455
      if(i % 10 === 0 && answer === 3) {thiredCount ++}
      else if(i % 10 === 1 && answer === 3) {thiredCount ++}
      else if(i % 10 === 2 && answer === 1) {thiredCount ++}
      else if(i % 10 === 3 && answer === 1) {thiredCount ++}
      else if(i % 10 === 4 && answer === 2) {thiredCount ++}
      else if(i % 10 === 5 && answer === 2) {thiredCount ++}
      else if(i % 10 === 6 && answer === 4) {thiredCount ++}
      else if(i % 10 === 7 && answer === 4) {thiredCount ++}
      else if(i % 10 === 8 && answer === 5) {thiredCount ++}
      else if(i % 10 === 9 && answer === 5) {thiredCount ++}
    }
    const counts = [firstCount, secondCount, thiredCount];
    // console.log(counts);
    const max = Math.max(firstCount, secondCount, thiredCount);
    // console.log(max);
    const result = [];
    counts.map((el,index) => {
    	if(el === max) {
      	result.push(index + 1);
      }
    })
    // console.log(result);
    return result.sort((a,b) => a-b)
}