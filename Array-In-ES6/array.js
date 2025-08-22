let array = [85,89,74,95,99];
console.log("old array is:", array);
for (let i = 0; i < array.length; i++) {
   array[i] = array[i]*0.1;
}
console.log("new array is:", array);