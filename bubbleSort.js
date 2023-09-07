function bubbleSort(array) {
  let swap = true;
  while(swap) {
      swap = false;
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j+1]) {
          let temp = array[j+1];
          array[j+1] = array[j];
          array[j] = temp;
          swap = true;
        }
      }
  }

  console.log(array)
  return array;
  // Only change code above this line
}

bubbleSort([1,4,2,345,43,32,1]);