/*
Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
//MY S:
function reverseWords(str) {
 const r= str.split(" ");//separated each word into an array
 return r2= r.map(el=>el.split("").reverse().join("")).join(" ")
}
