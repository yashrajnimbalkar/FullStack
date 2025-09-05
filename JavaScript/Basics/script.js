// console.log("hello World")


//LOOPS
// for(let i=1; i<=10; i++)
// {
//     console.log(i);
// }





//strings
// let name = `hello,
// my name is 
// rahul.
// I am studying in 
// collge.`;
// console.log(name);

// let name1 = new String('rahul');
// console.log(name1);

// let name = "rahul";
// console.log(name);

// console.log(typeof name1); // "object"
// console.log(name1 instanceof String); // true
// console.log(name1.valueOf()); // "rahul" (primitive value of the object)





//Object
// let obj = {
//     name:"rahul",
//     age:20,
//     height:175,
//     greet:function(){
//         console.log("Hello jii");
//     }
// };

// obj.greet();
// console.log(obj.age);

//Shallow copy
// let obj1 = obj;
// console.log(obj1);
// obj1.age=1000;
// console.log(obj);

//Deep Copy
// let obj1 = JSON.parse(JSON.stringify(obj));
// obj1.age=1000;
// console.log(obj1);
// console.log(obj);





//Array mapping
// let arr=[10,20,30];
// let ansArray = arr.map((number)=>{
//     return number*number;
// })
// console.log(ansArray);






//Filter
// let arr = [12,13,14,15,21,25,45];
// let ansarray = arr.filter((n)=>{
//     return n>20;
// })
// console.log(ansarray);

 

//Reduce
// let arr = [10,20,30,40];
// let ansArray = arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(ansArray);x



//iterating the array in differnt methods
// let arr = [10,20,30,40];

//for each
// arr.forEach((i)=>{
//     console.log(i);
    
// })


//for in
// for (let i in arr){
//     console.log(arr[i]);
// }


//for of
// for(let i of arr){
//     console.log(i);
// }


//Array in function
// function getSum(arr)
// {
//     let sum = 0;
//     let n = arr.length;
//     for(let i=0; i<n; i++)
//     {
//         sum+=arr[i];
//     }
//     return sum
// }
// console.log(getSum(arr));



//object cloning 
// let src = {
//     age:18,
//     wt:45,
//     name:"Rahul"
// }
// let dest = {...src};
// src.age=20 ;
// console.log(dest);







//Error handling
// try{
//     console.log("Inside try block")
//     console.log(x);
//     console.log("The line which will not get executed")
// }
// catch(e){
//     console.log("Inside catch block");
//     console.log("Error : ",e);
// }
// finally{
//     console.log("Inside finally block");
// }

//throw our own error
// try{
//     console.log("Inside try block")
//     console.log(x);
//     console.log("The line which will not get executed")
// }
// catch(e){
//     throw new Error("Pehle declare karo bhai")
// }

//
// window.console.log("rahul")