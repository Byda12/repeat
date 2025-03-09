// index_5
// for of on array like object
// loop on an object using for in


// add or remove from an array
const products = [
    {name : 'laptop',price : 3200,brand:'len',color:'silver'},
    {name : 'phone',price : 7200,brand:'HTC',color:'golden'},
    {name : 'watch',price : 3000,brand:'casio',color:'yellow'},
    {name : 'sunglasses',price : 300,brand:'ray',color:'black'},
    {name : 'camera',price : 3200,brand:'canon',color:'gray'}
];
const newProduct = {name:'webcam',price:700,brand:'Lal'};

// copy products array and then add newProduct
const newProducts = [...products,newProduct];
// console.log(newProducts);


// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product =>product.name!=='phone');
// console.log(remaining);




//================================================
// index_6


// 'almas' , 5 ,true ,{} , []
// '',0,false,null,undefined

// check truthy
let myVar = 5;
if(myVar){
   myVar = myVar *100;
//    console.log(myVar);
}
else{
   myVar = 0;
//    console.log(myVar);
}


let myMoney = 50 ;
// you check negative or falsy anything
if(!myMoney){

}
else{

}
