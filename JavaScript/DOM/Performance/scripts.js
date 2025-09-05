const t1 = performance.now()
for(let i=0; i<100; i++)
{
    let para= document.createElement("p");
    para.textContent = "This is para: "+ (i+1);
    document.body.appendChild(para);
}
const t2 = performance.now()
console.log("Time for code1: ", t2-t1);



const t3 = performance.now()
let mydiv = document.createElement("div");
for(let i=0; i<100; i++)
{
    let para= document.createElement("p");
    para.textContent = "This is para: "+ (i+1);
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv)
const t4 = performance.now()

console.log("Time for code2: ", t2-t1);