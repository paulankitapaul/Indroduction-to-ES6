const arr = [10,20,30,40,50]
for(let item of arr){
    // console.log(item);
}
arr.forEach(a=>{
    console.log(a);
})
arr.forEach((item,index,wholeArray)=> {
    console.log(item,index,wholeArray);

})