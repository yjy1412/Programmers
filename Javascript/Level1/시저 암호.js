function solution(s, n) {
  const map = [];
  for (let i = 97; i <= 122; i++) {
      map.push(String.fromCharCode(i));
  }
  // console.log(map)
  const arr = s.split('');
  const mapLen = map.length;
  for (let i = 0; i < arr.length; i++) {
      const letter = arr[i];
      if (letter !== " ") {
          if (letter === letter.toUpperCase()) {
              const lower = letter.toLowerCase();
              const idx = map.indexOf(lower);
              const mapIdx = (idx + n) % mapLen;
              arr.splice(i, 1, map[mapIdx].toUpperCase());
          } else {
              const idx = map.indexOf(letter);
              const mapIdx = (idx + n) % mapLen;
              arr.splice(i, 1, map[mapIdx]);
          }
      }
  }
  return arr.join('')
}