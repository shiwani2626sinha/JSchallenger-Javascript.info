/*question
Make all external links orange by altering their style property.

A link is external if:

    Its href has :// in it
    But doesn’t start with http://internal.com.*/


  let links = document.querySelectorAll('a');
  for(let link of links ) {
    let url = link.getAttribute('href');
    if(!url) continue; // empty
    if (!url.includes('://')) continue; // no protocol

  if (url.startsWith('http://internal.com')) continue; // internal

 
    
     link.style.color = 'orange';
  }

