const students1 = ["lika","liya","rotha","panha","Bunna"];

students1.push("Narith");  //add to the end of array
students1.unshift("Sokleng"); // add to the start of array

const students2 = ["Phument","Pilysak","Rothana"];


//merge arrays with concat() function
// const allStudents = students1.concat(students2);

//Combines array with spread (push or combines) operators => Recomment 
// const newStudent =  [...students1,"Reaksa"];

const allStudents = [...students1,...students2];




// array with foreach function
students1.forEach(function(value,index){
    console.log(`Student Name of ${index} : ${value}`)
});


// array with map function
console.log(".....Loop with map function.....")
allStudents.map(function(value,index){
    console.log(`Student Name of ${index} : ${value}`)
});