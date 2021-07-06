// create two constructors as such the object created form both pf them are equal
// using func exp syntax

let user = {};

let A = function () {
  return user; 
}
let B=  function () {
  return user; 
}
alert( new A() == new B() ); // true

// using general func dec
let user = {};

function A() {
  return user; 
}
function B () {
  return user; 
}
alert( new A() == new B() ); // true






