// scope
// global-scope
// block-scope
// functional-scope
 const x1 = 5;
 console.log(x1);
 if(true){
    console.log(x1);
 }
 function show(){
    console.log(x);
 }
 show()
const x = 10;
{
    // let x = 10;
    console.log(x);
}
console.log(x);
// let,const maintain the block scope. 
{
    var y = 20;
    console.log(y);
}
console.log(y);
// functional scope
function scope(){
    const x = 30;

}
console.log(x);
// if we don't declare the variable using var,let or const.. it will automatically declared as global scope
