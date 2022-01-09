function solution(numbers, hand) {
    
  const pad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"]
  ]
  // 1 => pad[1][0]
  let result = [];
  // 첫 시작 위치
  let left = [3,0];
  let right = [3,2];
  
  for(let i = 0; i < numbers.length; i ++) {
      const num = numbers[i];
      if( [1,4,7].includes(num)) {
          result.push("L");
          
          let x;
          if ( num === 1 ) { x = 0 }
          else if ( num === 4 ) { x = 1 }
          else { x = 2 };
          left = [ x, 0 ];
      } else if( [3,6,9].includes(num)) {
          result.push("R")
          
          let x;
          if ( num === 3 ) { x = 0 }
          else if ( num === 6 ) { x = 1 }
          else { x = 2 };
          right = [ x, 2 ];
      } else {
          const left_x = left[0];
          const left_y = left[1];
          const right_x = right[0];
          const right_y = right[1];
          
          let x;
          if ( num === 2 ) { x = 0 }
          else if ( num === 5 ) { x = 1 }
          else if ( num === 8 ) { x = 2 }
          else { x = 3 };
          const num_x = x;
          const num_y = 1;
          
          const distanceFromLeft = Math.abs(left_x - num_x) + Math.abs(left_y - num_y);
          const distanceFromRight = Math.abs(right_x - num_x) + Math.abs(right_y - num_y);
          
          if ( distanceFromLeft === distanceFromRight ) {
              if ( hand === "left" ) { 
                  result.push("L");
                  left = [num_x, 1];
              } else {
                  result.push("R");
                  right = [num_x, 1];
              }
          } else {
              if ( distanceFromLeft < distanceFromRight ) {
                  result.push("L");
                  left = [num_x, 1];
              } else {
                  result.push("R");
                  right = [num_x, 1];
              }
          }
      }
  }
  return result.join("");
}