const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
		const result = [];
    for ( let i = 0; i < commands.length; i ++) {
    	const initialIdx = commands[i][0];
      const finalIdx = commands[i][1];
      const k = commands[i][2];
      
      const target = array.slice(initialIdx-1, finalIdx).sort((a,b) => a-b)[k-1];
      result.push(target)
    }
    return result;
}

console.log(solution(array, commands))