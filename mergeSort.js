function mergeSort(array) {
  //Base case
  if (array.length === 1) return array;

  //We divide the array into two parts
  let index = parseInt(array.length / 2);
  let left = array.slice(0,index)
  let right = array.slice(index)

  //We get the sorted left and right
  left = mergeSort(left);
  right = mergeSort(right);

  //We merge them together
  array = merge(left,right);

  return array;
}

function merge(arr1,arr2) {
  let arr = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    }
    else {
      arr.push(arr2[j]);
      j++;
    }
  }

  //Whatever is left is concatenated to the right
  let remaining = [];

  if(i < arr1.length) {
    remaining = arr1.splice(i);
  }

  else {
    remaining = arr2.splice(j);
  }

  arr = arr.concat(remaining);
  return arr;
}

let res = mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
console.log(res);