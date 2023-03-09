//Description:https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript
//my solution:
function XO(str) {
    //code here
  const newStr=str.toLowerCase().split("");
  return newStr.filter(x=>x==="x").length===newStr.filter(x=>x==="o").length;
}
//S2:
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//D:https://www.codewars.com/kata/535474308bb336c9980006f2/javascript
//MY S:
var greet = function (name) {
  const firstLetter = name.slice(0, 1).toUpperCase();
  const theRest = name.slice(1).toLowerCase();
  return `Hello ${firstLetter}${theRest}!`;
};
//S2:
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};
//S3
var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};
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
