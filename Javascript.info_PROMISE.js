// PROMISE IS A JS OBJECT THAT LINKS PRODUCING CODE AND CONSUMING CODE
// IT TAKES A FUNCTION AS A PARAMETER WHILE OBJECT CREATION
// FUNCTION IS THE PRODUCER CODE
// FUNCTION HAS TWO PARAMETERS - RESOLVE / REJECT
// ONCE FUNCTION EXECUTION IS COMPLETED, IF THERE'S AN ERROR, IT CALLBACK THE REJECT CODE ELSE RESOLVE CODE


// HOW TO CREATE A PROMISE - 
let promise = new Promise(function(resolve, reject) {
 // this is some random producer code
  // this is more like a performer

}); 


//promise object properties
// a promise object has state property - which is initially pending, fulfilled when resolved else rejected
// a promise object has result property - which is initially undefined, changed to result or error
// executer will run the code and callback resolve / reject to change the state of the promise object
let promise = new Promise(function(resolve, reject) {
 //execution code
 // success
 resolve("success");
});

let promise = new Promise(function(resolve,reject){
 //execution cde
 //failes
 reject("whhooops! ")
 //
});

//Accessing or subscribing to a promise object
// how can a consumer use a async function created through the promise object
// then/catch/finally

