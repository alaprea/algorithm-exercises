function pairwise(arr, arg) {
  let sum = 0;
  let elemsUsed = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg && (!elemsUsed.has(i) && !elemsUsed.has(j))) {
        sum += i + j; 
        elemsUsed.add(i);
        elemsUsed.add(j);
      } 
    }
  }
  console.log(sum)
  return sum;
}

pairwise([1,1,1], 2);