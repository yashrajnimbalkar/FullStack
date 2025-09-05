// function sayName(){
//     console.log("Rahul is my name");
// }



// let promise = new Promise((resolve, reject)=>{
//     setTimeout(sayName, 2000);
//     resolve(1);

// });



// let promise = new Promise((resolve, reject)=>{
//     setTimeout(sayName, 2000);
//     reject( new Error("Galat hain bhaiya"));

// });


let myPromise = new Promise((resolve, reject)=>{
    let flag = true;
    if(flag){
        resolve(1);
    }
    else{
        reject(-1);
    }
})

myPromise.then((message)=>{
    console.log("First vale ka output :", message);
    return 2;
}).then((message)=>{
    console.log("Second vale ka output :", message);
    return 3;
}).then((message)=>{
    console.log("third vale ka output :", message);
    return 4;
}).catch((error)=>{
    console.log("Error is : ", error);
});
