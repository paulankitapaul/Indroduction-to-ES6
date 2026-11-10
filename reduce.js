const array = [1,3,5,2]
const addition = array.reduce((prev,current)=>prev + current,0)
console.log(addition);
// for multiply
const multiply = array.reduce((prev,current)=>prev * current,1)
console.log(multiply);
const arrObj = [{a:1},{a:3},{a:3}]
const total = arrObj.reduce((prev,current)=>prev + current.a,0)
console.log(total);