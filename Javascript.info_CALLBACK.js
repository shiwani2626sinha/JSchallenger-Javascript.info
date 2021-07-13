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
      

// callback error handling 
function loadScript(src, callback){
  //code of script loading
  script.onload = () => callback(null, srcipt);
  script.onerror = () => callback(error, null );
  //code of script appending
}

loadScript("some-random-url-here-we-go-again", function(error, srcipt){
  if(error){
    //some error handle code 
  }
  else{
    //some actual work driven
  }
})


// callback hell problem or pyramid of doom 
// so if we keep calling call back inside on another and keep on handling cases and loops it will become a pyramid structure tightly coupled
//something like this - 
loadScript("some-random-url-here-we-go-again", function(error, srcipt){
  if(error){
    //some error handle code 
  }
  else{
    //code
    loadScript("some-random-url", function (error, script) {
      if(error){
        //handle the error
      }
      else {
        //code
        loadScript("some-ul", function(error,script){
         ...................................
        })
      }
    })
  }
})

           
