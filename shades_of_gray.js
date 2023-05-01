/*
Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

Examples:

n =  1:    ["#010101"]
n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.

Black: #000000 and white: #ffffff are not accepted values.

When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

Have fun!
*/
function shadesOfGrey(n) {
  let shades = [];
  for (let i = 1; i <= Math.min(n, 254); i++) {
    let grey = ('0' + i.toString(16)).slice(-2); /*i 1 den başlamasının nedeni "siyah" hex renginin dışarda kalması.0 eklememizin amacı
    10 dan küçük sayılar olunca önüne 0 eklemek,
    zaten 10 dan fazla ise veya ae gibi bir sey çıkınca sonuç "0ae" gibi olacak ve 
    biz bunun son iki karakterini alacağız.eklemeseydik 3 lü hex color ortaya çıkacaktı*/
    shades.push('#' + grey + grey + grey)
  }
  return shades;
  }
