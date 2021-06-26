// max array sol 1- 

function myFunction( input ) {
var max = input[0];
      for ( var i = 1; i<input.length; i++) 
      {
         if (max < input[i])
         max = input[i];
      }

   return max;
}

// max array inbulit function sol 2-
function myFunction( input ) {
input.sort();
var max = input[input.length-1];
return max;

}