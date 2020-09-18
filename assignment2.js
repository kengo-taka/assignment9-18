const arrayOfMultiples = function(num,length) {
  x = [];
  for ( i = 1 ; i <= length ; i++) {
x.push(num*i);
  }
  console.log(x);
  } 
  
  arrayOfMultiples(12, 10) 
  // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
  arrayOfMultiples(17, 6)
  //  ➞ [17, 34, 51, 68, 85, 102]