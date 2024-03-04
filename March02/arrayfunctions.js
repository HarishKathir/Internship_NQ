const array = require("./array_objects")

//at()
//displays the value of the specified index
console.log(array.at(2)); 


//concat
const findbatch2024male = (student) =>{
    return student.gender === "male" && student.batch === "2024";
}

const findbatch2023male = (student) =>{
    return student.gender === "male" && student.batch === "2023";
}

let batch2024male = array.filter(findbatch2024male);
let batch2023male = array.filter(findbatch2023male);


for (const key of batch2024male.concat(batch2023male)) {
    console.log(key);
}


//filter
//find sem marks of passed out students

const findsem4marks = (student) =>{
    if(student.grade.sem4 > 0){
        console.log(student.firstName + student.lastName);
    };
}
const semmarksof2023 = array.filter(findsem4marks);

console.log(semmarksof2023)

//entries
console.log(Object.entries(array));

//every

const checksem4marks = (student) =>{
   return student.grade.sem4>0;
}

const sem4marks = array.every(checksem4marks);

console.log(sem4marks);

//fill

const fillarray1 = [1,2,3,4,5];
const fillarray2 = [{
    name:"ari",
    age: 22
},
{
    name:"bari",
    age: 26
},
{
    name:"hari",
    age: 29
}];

console.log(fillarray1.fill(0,2,4));
console.log(fillarray2.fill("empty",1,2));

//find

const findharish = (student) => {
    return student.id === "22mca017";
}
console.log(array.find(findharish));
console.log(array.findIndex(findharish));

//flat and flatMap
const newarray1 = [2,["harish",33],[33,44,55,"sttr"],31,["student",["boys",[34],["girls",[20]]]]];
const newarray2 = newarray1.flat(4);
console.log(newarray2);

const newarray3 = [
    [1,2,3],
    [2,3,4],
    [3,4,5]
]
console.log(newarray3.flat(Infinity));

const gradearray = array.flatMap((students) => {
    return students.firstName +" "+ students.id;
});

console.log(gradearray);