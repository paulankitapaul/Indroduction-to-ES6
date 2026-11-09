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
const myInfo = {
    name:'Ankita paul',
    age:'25',
    gramerBari:'Banskhali',
    contact:{
        phoneNumber : 23434,
        email:'paulankita.ctg@gmail.com',

    }
}
const obj2 = {...myInfo};
obj2.marriged=false;
console.log(obj2);
console.log(myInfo);
const{contact} = myInfo;
const{email}= contact;
console.log(email);