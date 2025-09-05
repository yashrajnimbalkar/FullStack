// let ele = document.createElement('h2');
// ele.textContent = "Hello World";
// console.log(ele);

// let bodytag = document.querySelector('body');
// bodytag.appendChild(ele);






// function colorChanging()
// {
//     let rahul = document.getElementById("heading")
//     rahul.style.backgroundColor='blue';
// }
// let rahul = document.getElementById("heading");
// rahul.addEventListener('click',colorChanging);
// rahul.removeEventListener('click',colorChanging);






// changing Default behaviour of anchor tag
// let link = document.querySelector('#anchor');
// link.addEventListener('click',function(event){
//     event.preventDefault();
//     link.textContent="Main nahi jaunga google"
    
// })





//alert when click on any main
// let mains = document.querySelectorAll('main');
function alertfun(event){
    alert("You have clicked on main "+event.target.textContent);
}
// for(let i=0; i<mains.length; i++){
//     mains[i].addEventListener('click',alertfun);
// }

//secon method 
let mydiv = document.querySelector('#hello');
mydiv.addEventListener('click',alertfun);