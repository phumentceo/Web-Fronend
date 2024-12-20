/*
  function in js
  1.none return function  
     . has param
     . none param
  2.return funcion
     . none param 
     . has param
*/ 

/*
   function hello(){} => called regular function
   const  hello = () {} => Errow Function  (ES6)
*/

//Regular Function
function show(){
    let  a = 10;
    let  b = 20;
    let  c = 30

    let total = a + b * c;

    console.log("a + b * c : ",total);

    console.log(`${a} + ${b} * ${c} = ${total} `);
}

//calling function
// show()

//Errow Function
const Info = () => {
    let name = "phument"
    let gender = "Male"
    let address = "Kompong Thom"
    console.log(`
        Name    : ${name} \n
        Gender  : ${gender} \n
        Address : ${address} \n
    `)
}
//Calling function
// Info();

//Errow function with parameter
const Sum1 = (a,b) => {
    let total = a + b;
    console.log(`${a} + ${b} = ${total}`)
}
//Calling function
// Sum1(10,20);

const PersonInfo = (name,position) => {
    console.log(`
        Person Name : ${name} 
        Position    : ${position} 
    `)
}
//Calling function
/*
PersonInfo("Lika","Designer")
PersonInfo("Panha","Web Fron-end Developer")
PersonInfo("Rotha","UX/UI");
*/

function Sum2 () {
    return 10 + 20;
}
console.log(`Sum 2 = ${Sum2()}`);


//Return function with ES6
const Sum3 = () => {
    let a = 10;
    let b= 100;
    let total = a + b;
    return total;
};


//Return function with ES6
const Sum4 = () => (
    10 + 30
);

//Return function with ES6
const Sum5 = () => 10 + 20 

//Return function with Parameter
const FindGrade = (avarageScore) => {
    let grade = '';
    if(avarageScore >=90 && avarageScore <= 100){
        grade = 'A';
    }
    else if(avarageScore >=80 && avarageScore < 90){
        grade = 'B';
    }
    else if(avarageScore >= 70 && avarageScore < 80){
        grade = 'c';
    }
    else if(avarageScore >=60 && avarageScore < 70){
        grade = 'd';
    }
    else if(avarageScore >= 50 && avarageScore < 60){
        grade = "e";
    }
    else {
        grade = 'f';
    }

    return grade;
}

console.log(`
    Phument : ${FindGrade(93)}
    Sokleng : ${FindGrade(85)}
    Narith  : ${FindGrade(89)}
`)







