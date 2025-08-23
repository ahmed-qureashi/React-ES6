let arr = [1, 2, 3, 4, 5];
arr.forEach((item, index) => {
  console.log("The item value is", item, "is standing at the position", index);
});

let arr2 = ["ahmed", "ali", "mohamed"];
arr2.forEach((item, index) => {
    console.log("The item in uppercase is", item.toUpperCase(), "is standing at the position", index);
});

//for given array, print the square of value using forEach loop
arr.forEach((item, index) => {
  console.log("The square of", item, "is", item * item, "and it is at position", index + 1 );
});