const myInfo = {
    name: 'Ankita paul',
    address:"Chittagong",
    subject:['Bangla','english','math']
}
const sentence = `my name is:${myInfo.name}.my fav subjects are: ${myInfo.subject.map((sub)=>sub).join('/')}`
console.log(sentence);