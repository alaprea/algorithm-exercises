function binarySearch(searchList, value) {
  //Base case when the value hasnt been found
  let arrayPath = [];
  if (searchList.length === 0) return "Value Not Found";
  
  let index = Math.floor((searchList.length - 1) / 2);

  //If its the same as value
  if (searchList[index] === value) arrayPath.push(value);

  //Search on the left side
  else if (searchList[index] > value) {
    arrayPath.push(searchList[index]);
    arrayPath = arrayPath.concat(binarySearch(searchList.splice(0,index),value));
  }

  //Search on the right side
  else {
    arrayPath.push(searchList[index]);
    arrayPath = arrayPath.concat(binarySearch(searchList.splice(index + 1, searchList.length),value));
  }

  //If it didnt find the value
  if (arrayPath[arrayPath.length - 1] === "Value Not Found") return "Value Not Found";
  else return arrayPath;
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

let res = binarySearch(testArray,2);
console.log(res)