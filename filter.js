const array = [10, 20, 40, 50, 70, 90]
const result = array.filter((item) => {
     return item > 500 && item % 2 === 0
    
})
console.log(result);