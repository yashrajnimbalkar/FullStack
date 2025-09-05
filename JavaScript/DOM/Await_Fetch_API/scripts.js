
//get data
// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/15');
//     let data = await response.json();
//     console.log(data);
// }
// getData();


//post data
const url="https://jsonplaceholder.typicode.com/posts"
let myHeader=new Headers();
myHeader.append('Content-Type','application/json');
const options = {
    method: 'POST',
    body: JSON.stringify({username:"Rahul Kshirsagar"}),
    headers:myHeader,
}

async function postData()
{
    let response = await fetch(url, options);
    let data = await response.json();
    console.log(data);
}
postData();