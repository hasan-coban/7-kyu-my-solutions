/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
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
