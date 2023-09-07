function quickSort(array) {
  //Base case
  if (array.length === 1 || array.length === 0) return array;

  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  left = quickSort(left);
  right = quickSort(right)
  return left.concat(pivot).concat(right);
}

let res = quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
console.log(res);