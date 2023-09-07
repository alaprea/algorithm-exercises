function selectionSort(array) {
  let min = array[0];
  let index = 0;
  
  for (let i = 0; i < array.length; i++) {
    min = array[i];
    let swap = false;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        index = j;
        swap = true;
      }
    }

    if (swap) {
      let temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
  }

  console.log(array)
  return array;
}

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])