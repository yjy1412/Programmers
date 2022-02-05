function solution(priorities, location) {
  const priority = priorities.reduce((obj, priority, idx) => {
      obj[idx] = priority;
      return obj
  }, {})
  // console.log(priority);
  const docs = Object.keys(priority);
  const completed = [];
  
  while (docs.length !== 0) {
      const doc = docs.shift();
      const docPriority = priority[doc];
      let isOk = true;
      for (let i = 0; i < docs.length; i++) {
          if (docPriority < priority[docs[i]]) {
              isOk = false;
              break;
          } 
      }
      isOk ? completed.push(doc) : docs.push(doc);       
  }
  return completed.indexOf(String(location)) + 1;
}