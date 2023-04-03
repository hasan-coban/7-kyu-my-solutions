

//D:https://www.codewars.com/kata/535474308bb336c9980006f2/javascript
//D:https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/solutions/javascript
//MY S:
function sumOfMinimums(arr) {
  // your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(...arr[i]);
  }
  return sum;
}
sumOfMinimums([
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100],
]);
//S2:
function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}
