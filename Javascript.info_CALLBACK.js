// call back example
// passed function as a param
// async programming
function loadScript(src, callback){
  //
  script.onload= () => callback(srcipt);
  //
}
loadScript("some-url-scr", (srcipt) => 
           // code 
           )
           
           
 // nested callbacks
   loadScript ("some-url-src", function() {
      //code
      loadScript("some-url-again", function(){
        //code again... this mutiple times lead to a PYRAMID 
      })
})
           
           
