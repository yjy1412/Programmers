function solution(clothes) {
	return Object.values(clothes.reduce((obj, cur) => {
        obj[cur[1]] = obj[cur[1]] ? obj[cur[1]] + 1 : 1;
        return obj;
    }, {})).reduce((acc, cur) => acc * (cur + 1), 1) - 1
  }