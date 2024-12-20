const students1 = [
    {
        'id'  : 1,
       'name' : 'vann lika',
       'gender' : "female",
        "age"  : 18,
        "address" : "Kompong Thom"
    },
    {
        'id'  : 2,
        "name" : "lin panha",
        "gender" : "male",
        "age"  : 20,
        "address" : "Kompong Cham"
    },
    {
        'id'  : 3,
        "name" : "phument",
        "gender" : "male",
        "age"  : 22,
        "address" : "Kompong Phraya",
    },
    {
        'id'  : 4,
        "name" : "sukai",
        "gender" : "female",
        "age"  : 21,
        "address" : "Kompong Sawang"
    }
];
//recommand filter for delete and search 

//SEARCH 

students1.filter((value) => (value.name.indexOf("phument") > -1)).map((value) => {
    console.log(`Student ID   : ${value.id}`)
    console.log(`Student Name : ${value.name}`)
    console.log(`Student Gender  : ${value.gender}`)
    console.log(`Student Age  : ${value.age}`)
    console.log(`Student Address : ${value.address}`)
    console.log("------------------------------------")
});


//DELETE
students1.filter((value) =>  value.name.includes("lin panha") != true)  
.map((value) => {  
        console.log(`Student ID   : ${value.id}`);  
        console.log(`Student Name : ${value.name}`);  
        console.log(`Student Gender  : ${value.gender}`);  
        console.log(`Student Age  : ${value.age}`);  
        console.log(`Student Address : ${value.address}`);  
        console.log("------------------------------------");  
    });


