/*implementation of constructor and JS Engine nature */

function Calculator () {
  this.read= function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
 };
 this.sum = function() {
   return this.a + this.b;
 }
 ;
 this.mul = function() {
 return this.a * this.b;
 };

}

//driver
// multiple objects can be created
let calculator = new Calculator();
 calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
