// write a function that console logs each item of the array one line at a time

let example = [1, 2, 3, 4, 'five', 6, 7];

const logItems = function (arr) {
  let x ="";
  for (i = 0; i < arr.length; i++) {
x = x + " " + arr[i];
  }
  console.log(x);
};

logItems(example);

