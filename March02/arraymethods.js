const array = require('./array_Objects')

//map

const displayname = (element) => {
    return element.firstName + element.lastName;
}

let display = array.filter(element => element.gender === "male").map(displayname);

console.time(`filter`)
for(element of display){
    console.log(element);
}
console.timeEnd(`filter`)

// const semmarksavg = array.reduce((grade) => {
//     const{sem1,sem2,sem3,sem4} = array;
//     year1 = (sem1+sem2)/2;
//     year2 = (sem3+sem4)/2
// },{
//     year1 :0,
//     year2 : 0
// })

// console.log(semmarksavg)
