Description:https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript
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
