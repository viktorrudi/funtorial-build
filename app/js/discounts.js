// const storeDiscountObj = function(){
//  let discountWrappers = Array.from(document.querySelectorAll('.discount__wrapper')); 
//  discountWrappers.map(discount =>{
//    let discountImg = discount.childNodes[1],
//        discountDetails = discount.childNodes[3]

//    let discountProperties = {
//     discountImage: discountImg.innerHTML,
//     discountName: discountDetails.childNodes

//    }
//    console.log(discountProperties.discountName);
//   // console.log(discount.childNodes);
//  });

// }

const seeMoreInfo = function (e) {
  const btnsSeeMore = document.querySelectorAll('.discount_btn--see-more'),
        btnClaim = document.querySelector('.discount_btn--claim');

  btnArray = Array.from(btnsSeeMore);
  btnArray.map(function (btnSeeMore) {
    btnSeeMore.addEventListener('click', function (e) {
      const discountText = e.path[2].childNodes[3].querySelector('p'),
        discountTable = e.path[2].childNodes[3].querySelector('table'),
        discountContent = e.path[2].childNodes[3];

      // When closing discount list
      if (discountContent.classList.contains('extended')) {
        discountContent.classList.remove('extended');
        btnSeeMore.innerHTML = '<i class="fas fa-angle-down"></i> See more details';
      }
      // When opening discount list
      else {
        discountContent.classList.add('extended');
        btnSeeMore.innerHTML = '<i class="fas fa-angle-up"></i> See less details';
      }
    });
  });
}

const modalFunc = function () {
  const wholeModal = document.querySelector('.modal__wrapper'),
    contentModal = document.querySelector('.modal__content');
    behindModal = document.querySelector('.modal__background'),
    closeBtn = document.querySelector('.modal__close'),
    claimBtns = document.querySelectorAll('.discount_btn--claim');

  const closeModal = function () {
    const close = function () {
      //Adding remove-classes to modal and its background
      contentModal.classList.add('modal__closed--content');
      behindModal.classList.add('modal__closed--behind');
    }
    closeBtn.addEventListener('click', () => close());
    behindModal.addEventListener('click', () => close());
  }

  const openModal = function () {
    const open = function (e) {
      contentModal.classList.remove('modal__closed--content');
      behindModal.classList.remove('modal__closed--behind');
      let discountImage = e.path[3].childNodes[1].childNodes[1].src;
      let discountTitle = e.path[2].childNodes[3].childNodes[1].innerHTML;
      let discountPercent = e.path[2].childNodes[1].childNodes[1].innerHTML;
      let discountNewPrice = e.path[2].childNodes[1].childNodes[3].innerHTML;
      let discountOldPrice = e.path[2].childNodes[1].childNodes[5].innerHTML;
      let discountCredits = e.path[2].childNodes[5]
      console.log(discountCredits)
    }

    //Add click event listener to all claim buttons
    claimBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        open(e)
      });
    });
  }
  openModal();
  closeModal();
}

//Run functions on page load
window.addEventListener('DOMContentLoaded', () =>{
  seeMoreInfo();
  modalFunc();
})