function permAlone(str) {
  let left = [...str];
  let res;

  if (str.length === 0) res = 0;
  else if (str.length === 1) res = 1;
  else res = noRepeats(left, "");
  
  return res;
}

function noRepeats(left, word) {
  //Base case
  if (left.length === 0) return 1;
  let x = 0;

  for(let i = 0; i < left.length; i++) {
    if (word.length === 0 || word[word.length-1] !== left[i]) {
      let newWord = word + left[i];
      let newLeft = left.slice(0,i).concat(left.slice(i+1,left.length));
      x += noRepeats(newLeft,newWord);
    }
  }
  return x;
}

let res = permAlone('aab');
console.log(res);