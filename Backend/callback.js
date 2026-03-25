//Understanding fucntion
// const a = function () {
//   console.log("hello");
// };

// console.log(a());

// Let written an function which takes a fucntion as argument
// Let make a function that just list the values of array

const toList = (arr, isGreater) => {
  //error handling
  if (!arr) return;

  //new arr
  let newList = [];

  //looping
  for (let index = 0; index < arr.length; index++) {
    newList.push(arr[index] * 3);
  }

  //logged value
  const value = isGreater(newList);
  return value;
};

const isGreater = (newArr) => {
  console.log(newArr);

  const value = newArr.filter((eachValue) => {
    return eachValue % 2 == 0;
  });

  return value;
};

let number = [1, 2, 3, 99.1, 5, 6, 7];
const value = toList(number, isGreater);

console.log(value);
