// 1. array destructurting

// const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y);

// const [x,y] = [42,65];
// console.log(x,y);

// const [x,y] = numbers;
// console.log(x,y);

function boxify (num1,num2) {
    const nums = [num1,num2];
    return nums;
}
// console.log(boxify(20,30));

const [first ,second] = boxify(20,30)
// console.log(first,second);

const student = {
    name : 'Sakib Khan',
    age : 32,
    movies:['king khan','Dhakar Mastan']
}

// const [firstMovie , secondMovie] = ['King Khan','Dhakar Mastan'];
// console.log(firstMovie,secondMovie);

const [firstMovie,secondMovie] = student.movies;
// console.log(firstMovie,secondMovie);
 

// Object destructuring
// const {name ,age} = {name :'Alu', age : 14};
// console.log(name,age);

// const {name ,age,salary} = {id:12,name:'Alu',salary:3400,age:14};
// console.log(name,salary);

const employee = {
    ide : 'Vs code',
    designation : 'developer',
    machine : 'mac',
    language : ['html','css','javascript'],
    specification:{
        height : 66 ,
        weight : 67,
        address:'kumarkhali',
        drink : 'Water',
        watch :{
            color : 'Black',
            price : 500,
            brand : 'garmin'
        }
    }
   
}
const {machine , ide }= employee;
// console.log(machine,ide);
const {weight,address} = employee.specification;
// console.log(weight,address);

const { color,price } = employee?.specification?.watch;
console.log(color,price);


