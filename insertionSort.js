function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = i;
    while(j >= 0 && array[j+1] < array[j]) {
      let temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
      j--;
    }
  }

  console.log(array)
  return array;
}

insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])