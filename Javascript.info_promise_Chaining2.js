// return promise in chaining
// notice that .then() returns a promise object
let promise = new Promise(function(resolve, reject){
  resolve(1);
})

promise.then( function(result) {
  alert(result)  //1 
  return new Promise(function(resolve, reject){
    resolve(result*2);
  });
}
).then (function(result){
alert(result)  //2 
})
