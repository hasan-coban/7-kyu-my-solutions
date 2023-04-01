/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/
//My S:
function largest(n, array) {
  const arr = [];
  if (n === 0) return [];
  const sortedArr = array.sort((a, b) => a - b);
  return sortedArr.slice(-n);
}
//S2:
const largest = function(n,xs){
  return n === 0 ? [] : xs.sort((a, b)=> a - b).slice(-n)
}