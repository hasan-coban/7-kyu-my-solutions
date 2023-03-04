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
