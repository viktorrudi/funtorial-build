const seeMoreInfo = function (e) {
  const btnsSeeMore = document.querySelectorAll('.discount__btn--see-more'),
        btnClaim = document.querySelector('.discount__btn--claim');

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
    claimBtns = document.querySelectorAll('.discount__btn--claim');

  const closeModal = function () {
    const close = function () {
      //Adding remove-classes to modal and its background
      contentModal.classList.add('modal__closed--content');
      behindModal.classList.add('modal__closed--behind');
    }
    closeBtn.addEventListener('click', () => close());
    behindModal.addEventListener('click', () => close());
  }

  const openModal = () => {
    const open = (e) => {
      contentModal.classList.remove('modal__closed--content');
      behindModal.classList.remove('modal__closed--behind');
      const discountInfo = JSON.parse(e.srcElement.getAttribute('data-discount-info'));

      const putDiscount = function(selector, value){
        document.querySelector(selector).innerHTML = discountInfo[value];               
      }

      // Info picked up from discounts-enter
      putDiscount('.old-currency-view', 'currency')
      putDiscount('.new-currency-view', 'currency')
      putDiscount('.name-view', 'name')
      putDiscount('.credit-cost', 'creditCost')
      putDiscount('.price-now', 'priceNew')
      putDiscount('.price-before', 'priceOld')
      putDiscount('.percent-view', 'percent')
          
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