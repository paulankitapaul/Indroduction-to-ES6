const array = [10, 20, 40, 50, 70, 90]
const result = array.find((item) => {
     return item > 50 && item % 2 === 0
    
})
console.log(result);