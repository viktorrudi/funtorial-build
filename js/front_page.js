'use strict';

function frontPageFunctions() {
  function slideShow() {
    let curIndex = 0,
      imgDuration = 3000,
      slider = document.querySelector('.heading__slideshow--current'),
      slides = slider.childNodes,
      imgArray = [
        'https://placeimg.com/800/400/animals',
        'https://placeimg.com/800/400/nature',
        'https://placeimg.com/800/400/grayscale',
      ];

    function buildSlideShow(arr) {
      for (let i = 0; i < arr.length; i++) {
        const img = document.createElement('img');
        img.src = arr[i];
        slider.appendChild(img);
      }
    }

    function slideShow() {
      function fadeIn(e) {
        e.className = 'fadeIn';
      }
      function fadeOut(e) {
        e.className = '';
      }

      fadeOut(slides[curIndex]);
      curIndex++;
      if (curIndex == slides.length) {
        curIndex = 0;
      }

      fadeIn(slides[curIndex]);

      setTimeout(function() {
        slideShow();
      }, imgDuration);
    }

    buildSlideShow(imgArray);
    slideShow();
  }

  function setStep1Height() {
    // To make space for step 2
    const step1HeightGet = document.querySelector('.step__topics').offsetHeight;
    const step2Container = document.querySelector('.step__two');
    step2Container.style.marginTop = `${step1HeightGet + 80}px`;
  }

  function topicCounter() {
    // Inserts number of how many topics are available on the front page
    // TODO: Needs to be updated with actual number from database
    const languagesCount = document.querySelector('.step__topics-feed--language').childElementCount;
    const schoolCount = document.querySelector('.step__topics-feed--school-topic').childElementCount;
    const quizzesCount = document.querySelector('.step__topics-feed--quiz').childElementCount;

    document.querySelector('.step___topics-counter--languages').innerHTML = languagesCount;
    document.querySelector('.step___topics-counter--school-topics').innerHTML = schoolCount;
    document.querySelector('.step___topics-counter--quizzes').innerHTML = quizzesCount;
  }

  function hideIfEmpty() {
    const categoryHolders = Array.from(document.querySelectorAll('.step___topics-box .step__topics-selection .row'));
    categoryHolders.map(category => {
      if (category.childElementCount === 0) {
        const wrapper = category.parentElement.parentElement;
        wrapper.style.display = 'none';
      }
    });
  }

  slideShow();
  topicCounter();
  setStep1Height();
  hideIfEmpty();
}

frontPageFunctions();
