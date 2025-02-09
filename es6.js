// index_2
//===============================================================================================



const numbers = [20,30,40,50];

// 1. Templete String


// 2. arrow function

const getFiftyFive = () => 55;
const output = getFiftyFive();
console.log(output);

const addSixtyFive = num => num + 65;
const secondOutput = addSixtyFive(20);
console.log(secondOutput);

const isEven = x => x % 2 == 0;
const thirdOutput = isEven(9);
console.log(thirdOutput);

const addTree = (x,y,z) => x+y+z;
const fourthOutput = addTree(2,4,6);
console.log(fourthOutput);

const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}
console.log(doMath(90,10));

// 3.  spread operator 
// const newNumbers = numbers;
// numbers.push(90);
// console.log(newNumbers);


const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
// console.log(numbers);
// console.log(newNumbers);

// create a new array from  an older array and add an element

const currentNumbers = [...numbers, 55];
console.log(currentNumbers);





// index_3
//===============================================================================================

const products = [
    {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
    {name:'phone',price:7000,brand:'iphone',color:'golden'},
    {name:'watch',price:3000,brand:'casio',color:'yellow'},
    {name:'sunglasses',price:300,brand:'raybon',color:'black'},
    {name:'camera',price:9000,brand:'cannon',color:'gray'}
];

