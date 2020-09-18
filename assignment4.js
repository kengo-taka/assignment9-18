const minSwaps = function(arr1,arr2) {
let x = 0;
for ( i = 0 ; i < arr1.length ; i++ ) {
if (arr1[i] !== arr2[i]) {
  x = x + 0.5;
}
}
console.log(x);
}

minSwaps("110011", "010111")
minSwaps("10011001", "01100110")