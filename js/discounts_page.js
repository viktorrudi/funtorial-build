'use strict';

const discountFunctions = () => {
  const seeMoreInfo = () => {
    const btnsSeeMore = document.querySelectorAll('.discount__btn--see-more');
    // const btnClaim = document.querySelector('.discount__btn--claim');

    const btnArray = Array.from(btnsSeeMore);
    btnArray.map(btnSeeMore => {
      btnSeeMore.addEventListener('click', e => {
        // Closest content box in relation to the button clicked
        const discountContent = btnSeeMore.parentElement.parentElement.querySelector('.discount__header--content');

        // When closing discount list
        if (discountContent.classList.contains('extended')) {
          discountContent.classList.remove('extended');
          /* html */
          btnSeeMore.innerHTML = `<i class="fas fa-angle-down"></i> See more details`;
        }
        // When opening discount list
        else {
          discountContent.classList.add('extended');
          /* html */
          btnSeeMore.innerHTML = `<i class="fas fa-angle-up"></i> See less details`;
        }
      });
    });
  };

  const modalFunc = () => {
    const contentModal = document.querySelector('.modal__content'),
      behindModal = document.querySelector('.modal__background'),
      closeBtn = document.querySelector('.modal__close'),
      claimBtns = document.querySelectorAll('.discount__btn--claim');

    const closeModal = () => {
      const close = () => {
        //Adding remove-classes to modal and its background
        contentModal.classList.add('modal__closed--content');
        behindModal.classList.add('modal__closed--behind');
      };
      closeBtn.addEventListener('click', () => close());
      behindModal.addEventListener('click', () => close());
      return true;
    };

    const openModal = () => {
      const open = e => {
        contentModal.classList.remove('modal__closed--content');
        behindModal.classList.remove('modal__closed--behind');
        const discountInfo = JSON.parse(e.srcElement.getAttribute('data-discount-info'));

        // Helper function for below actions
        const putDiscount = (selector, value) => {
          document.querySelector(selector).innerHTML = discountInfo[value];
        };

        // Info picked up from discounts-enter
        putDiscount('.old-currency-view', 'currency');
        putDiscount('.new-currency-view', 'currency');
        putDiscount('.name-view', 'name');
        putDiscount('.credit-cost', 'creditCost');
        putDiscount('.price-now', 'priceNew');
        putDiscount('.price-before', 'priceOld');
        putDiscount('.percent-view', 'percent');
        return true;
      };

      //Add click event listener to all claim buttons
      claimBtns.forEach(btn => {
        btn.addEventListener('click', e => {
          open(e);
        });
      });
    };
    openModal();
    closeModal();
  };

  //Run functions on page load
  window.addEventListener('DOMContentLoaded', () => {
    seeMoreInfo();
    modalFunc();
  });
};

discountFunctions();
