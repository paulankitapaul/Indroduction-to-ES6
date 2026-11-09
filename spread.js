const arr1 = [12, 14, 16];
const arr2 = [...arr1]
arr2.push(30)
console.log(arr2, arr1);
// for(let item of arr1){
//     arr2.push(item)
//     // console.log(arr2);
// }
// array destructuring
const names = ['Mita', 'Rita', 'sita']
const [x, y, z] = ['Mita', 'Rita', 'sita']
const [, b] = ['Mita', 'Rita', 'sita']
console.log(b);
console.log(x, y, z);