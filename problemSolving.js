// give me those students whose avg makrs is 50 and fiftyPercent is true
const students = [
    { name: 'mehedi', email: 'mehedi@gmail.com', avg: 56, fiftyPercent: true },
    { name: 'hridoy', email: 'hridoy@gmail.com', avg: 48, fiftyPercent: true },
    { name: 'akash', email: 'akash@gmail.com', avg: 56, fiftyPercent: true },
    { name: 'riyad', email: 'riyad@gmail.com', avg: 46, fiftyPercent: true },
    { name: 'cristy', email: 'cristy@gmail.com', avg: 56, fiftyPercent: true },
]
const findScic = (students) => {
    const scic = students.filter((persons) => 
        persons.avg >= 48 && persons.fiftyPercent === true
    )
    const names = scic.map((p) => p.name)
    return names;
}
const result = findScic(students)
console.log(result);
console.log(scic);