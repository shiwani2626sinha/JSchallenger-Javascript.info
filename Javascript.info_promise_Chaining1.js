// promise chaining - Part1
// resolves callback hell problem
// when after a sync call, a chain of actions are required to be performed, each has execution chained in series
// a promise.then() function call returns a promise object internally, and hence the next .then() function is called
// promiseObj.then(function(result){........}).then().then().....

let promiseObj = new Promise(function(resolve, reject){
// prducer code
resolve(1);
// end code
})

// consumer or subscriber code
promiseObj.then(function(result){return result*2}) // returns 2 -> flow1
  .then(function(result){return result*4}) //returns 8  ->flow2
  .then(function(result){return result*8}) // returns 64 ->flow3

// hence the flow goes as -> 1>2>3

// calling a promise object multiple times is not chaining, it is parallel calls

let promiseObj = new Promise(function(resolve , reject){
  // producer code
  resolve(1);
})

promiseObj.then(function(value){
alert(result*2); //2
})
promiseObj.then(function(value){
alert(result*2); //2
})
promiseObj.then(function(value){
alert(result*2); //2 
})


