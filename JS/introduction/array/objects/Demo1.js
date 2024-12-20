const students1 = [
    {
       'name' : 'vann lika',
        gender : "female",
        "age"  : 18,
        "address" : "Kompong Thom"
    },
    {
        "name" : "lin panha",
        "gender" : "male",
        "age"  : 20,
        "address" : "Kompong Cham"
    }
];

const students2 = [
    {
        "name" : "phument",
        "gender" : "male",
        "age"  : 22,
        "address" : "Kompong Phraya",
    },
    {
        "name" : "sukai",
        "gender" : "female",
        "age"  : 21,
        "address" : "Kompong Sawang"
    }
]


//merge array
const newStudents = [...students1,...students2];

/*
newStudents.map((value,index) => {
    console.log(`Student Name of ${index} : ${value.name}`)
    console.log(`Student Gender of ${index} : ${value.gender}`)
    console.log(`Student Age of ${index} : ${value.age}`)
    console.log(`Student Address of ${index} : ${value.address}`)
    console.log("------------------------------------")
});
*/

const studentFilter = newStudents.filter(function(value,index){
    return (value.age >= 20)
});


//Display data after the studentFilter
studentFilter.map((value,index) => {

    console.log(`Student Name of ${index} : ${value.name}`)
    console.log(`Student Gender of ${index} : ${value.gender}`)
    console.log(`Student Age of ${index} : ${value.age}`)
    console.log(`Student Address of ${index} : ${value.address}`)
    console.log("------------------------------------")

})

//regular function and arow function



