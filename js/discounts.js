

let seeMoreInfo = function(e){
  let btnsSeeMore = document.querySelectorAll('.discount_btn--see-more'),
      btnClaim = document.querySelector('.discount_btn--claim');
      
 btnArray = Array.from(btnsSeeMore);
 btnArray.map(function(btnSeeMore){
   btnSeeMore.addEventListener('click', function(e){
    // btnSeeMore.classList.add = 'extended';
    let discountText = e.path[2].childNodes[3].querySelector('p'),
        discountTable = e.path[2].childNodes[3].querySelector('table'),
        discountContent = e.path[2].childNodes[3];

    // When closing discount list
    if(discountContent.classList.contains('extended')) {
     discountContent.classList.remove('extended');
     btnSeeMore.innerHTML = '<i class="fas fa-angle-down"></i> See more details';
    } 
    // When opening discount list
    else{
     discountContent.classList.add('extended');
     btnSeeMore.innerHTML = '<i class="fas fa-angle-up"></i> See less details';
    }
   });
  }
 );
}

seeMoreInfo();
