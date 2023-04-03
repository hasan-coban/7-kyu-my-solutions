/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
//MY S:
function XO(str) {
    //code here
  const newStr=str.toLowerCase().split("");
  return newStr.filter(x=>x==="x").length===newStr.filter(x=>x==="o").length;
}
//S2:
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
