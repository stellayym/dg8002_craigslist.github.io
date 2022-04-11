let Apname = document.querySelector('search');




document.querySelector('.form-control').addEventListener('button', (e) => {
  e.preventDefault();

})

function success() {
  if(document.getElementById("textsend").value==="") { 
           document.getElementById('button').disabled = true; 
       } else { 
           document.getElementById('button').disabled = false;
       }
   }