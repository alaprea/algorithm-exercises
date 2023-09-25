/* Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating. */

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