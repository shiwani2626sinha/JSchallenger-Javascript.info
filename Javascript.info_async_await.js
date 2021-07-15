//async is a keyword, if added with a funtion, makes sure it returns a promise object
async function f(){
}
// this function return a promise and result bound to the resolved promise
f.then(()=>alert("hello"))

//await keyword
// it waits till promise is resloved and executes func after it.
// it is another wait to use .then() func
async function f() {
  let promise = new Promise(function(resolve, reject){
  setTimeout(resolve(1),3000)});
}

let abc = await promise;
alert(abc);

