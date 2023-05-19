/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

//MY S:
function spacey(array){
  let newArr=[];
  for(let i=1; i<=array.length; i++){
    const res= array.slice(0,i).join("");
    newArr.push(res);
     }
  return newArr;

}
//2nd:
function spacey(array){
	let string = ''
	return array.map( (e) => string += e )
}
