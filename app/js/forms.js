let updateLabelOnActive = function(){
 let inputs = Array.from(document.querySelectorAll('form input')),
     textAreas = Array.from(document.querySelectorAll('form textarea')),
     selects = Array.from(document.querySelectorAll('form select'));
     
 let allInputs = inputs.concat(textAreas, selects);

 function toggleClass(){
  this.previousElementSibling.classList.toggle('active');
 }
 for (let i=0; i < allInputs.length;i++){
  let input = allInputs[i];
  input.addEventListener('focus', toggleClass);
  input.addEventListener('blur', toggleClass);
 }
}

updateLabelOnActive();