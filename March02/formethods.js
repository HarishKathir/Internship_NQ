const array = require("./array_Objects")

// console.log(array);

//for each
array.forEach(element => {
    // console.log(element.firstName)
});

//for in
for(let elements in array){
    if(array[elements].grade.sem1 > 80){
        let fullname = array[elements].firstName + array[elements].lastName;
        console.log(fullname);
    }
}

//for of

for(let element of array){
    if(element.gender === "male" && (element.grade.sem1 > 70 || element.grade.sem2 > 70)){
        console.log(`The person with both sem grade greater than 70 and a male is ` + element.firstName + element.lastName);
    }
}

