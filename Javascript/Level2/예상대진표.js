function solution(n,a,b)
{
    // 자신의 번호가 홀수인경우, +1인 상대와 붙게된다.
    // 자신의 번호가 짝수인경우, -1인 상대와 붙게된다.
    // 승자가 이전 라운드에서 짝수였던 경우, 2로 나눈 값을 배정받게 된다.
    // 승자가 이전 라운드에서 홀수였던 경우, +1한 값에서 2로 나눈 값을 배정받게 된다.
    
    // 로직
    // 1. A와 B가 서로 붙는 지 확인한다.
    // 2-1. 서로 붙을 경우, 그때의 라운드 수를 리턴한다.
    // 2-2. 붙지 않을 경우, 다음 라운드의 A와 B의 번호를 도출한다.
    // 3. 1, 2의 과정을 반복한다.
    
    // 1. A와 B가 서로 붙는 지 확인한다.
    // A가 짝수인 경우,
    // A가 홀수인 경우,
    let isMatched = false;
    let round = 1;
    while (isMatched === false) {
        if (a % 2 === 0) {
            if (a === b + 1) { return round; } 
        } else if (a === b - 1) { return round; }
        a = Math.floor((a+1) / 2);
        b = Math.floor((b+1) / 2);
        round ++;
    }
    return round;
}