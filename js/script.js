let Apname = document.querySelector('search');




document.querySelector('.form-control').addEventListener('button', (e) => {
  e.preventDefault();

})

/* for sending message  */

function success() {
  if(document.getElementById("textsend").value==="") { 
           document.getElementById('button').disabled = true; 
       } else { 
           document.getElementById('button').disabled = false;
       }
   }

function sent() {
  alert("Your message has been sent successfully!");
}
