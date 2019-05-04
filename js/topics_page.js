'use strict';

function topicFunctions() {
  const addExtendButton = () => {
    //Create buttons and fade effect
    const topicExtendBtnFade = document.createElement('div');
    const topicExtendBtn = document.createElement('div');
    const topicExtendBtnArrow = document.createElement('i');
    topicExtendBtnFade.setAttribute('class', 'category__items--fade-overlay');
    topicExtendBtn.setAttribute('class', 'category__items--extend-btn');
    topicExtendBtnArrow.setAttribute('class', 'fas fa-angle-down');
    topicExtendBtn.appendChild(topicExtendBtnArrow);

    const topicWrappers = Array.from(document.querySelectorAll('.category__items--wrapper'));

    topicWrappers.map(topicWrapper => {
      //Temporarely setting height to find out if div is overflowing
      topicWrapper.style.height = '135px';

      // If wrapper is overflowing - show buttons
      if (topicWrapper.scrollHeight > topicWrapper.clientHeight) {
        topicWrapper.appendChild(topicExtendBtnFade.cloneNode(true));
        topicWrapper.appendChild(topicExtendBtn.cloneNode(true));
      }

      // Removing temp height set. Going back to only using max-height for animation puropses
      topicWrapper.style.height = 'unset';
    });
  };

  const closeAll = () => {
    const wrappers = Array.from(document.querySelectorAll('.category__items--wrapper'));
    wrappers.map(wrapper => {
      wrapper.classList.add('wrapper__collapsed');
    });
  };

  const toggleOnClick = () => {
    const buttons = Array.from(document.querySelectorAll('.category__items--extend-btn'));
    buttons.map(button => {
      button.addEventListener('click', e => {
        closeCat(e);
      });
    });

    const closeCat = e => {
      //Append wrapper_closed class on click
      e.path[1].classList.toggle('wrapper__collapsed');
      let btnArrow = e.path[0].childNodes[0];

      //Rotate arrow if opened
      if (btnArrow.classList[1] == 'fa-angle-down') {
        btnArrow.classList = 'fa fa-angle-up';
      } else {
        btnArrow.classList = 'fa fa-angle-down';
      }
    };
  };

  // Adds number to counter next to category, and hides the entire category if empty
  const countTopics = () => {
    if (document.querySelector('.topic__counter')) {
      const topic = {
        languages() {
          const allTopics = Array.from(document.querySelectorAll('#category__feed--lang .category__item'));
          const displayCounter = document.querySelector('.category__type--languages .topic__counter');
          displayCounter.innerHTML = allTopics.length;

          if (allTopics.length === 0) {
            document.querySelector('.category__type--languages').style.display = 'none';
          }
        },
        schoolTopics() {
          const allTopics = Array.from(document.querySelectorAll('#category__feed--school .category__item'));
          const displayCounter = document.querySelector('.category__type--school .topic__counter');
          displayCounter.innerHTML = allTopics.length;

          if (allTopics.length === 0) {
            document.querySelector('.category__type--school').style.display = 'none';
          }
        },
        quizzes() {
          const allTopics = Array.from(document.querySelectorAll('#category__feed--quiz .category__item'));
          const displayCounter = document.querySelector('.category__type--quiz .topic__counter');
          displayCounter.innerHTML = allTopics.length;

          if (allTopics.length === 0) {
            document.querySelector('.category__type--quiz').style.display = 'none';
          }
        },
      };
      topic.languages();
      topic.schoolTopics();
      topic.quizzes();
    }
  };

  // For topic selection (after chosen excersise in category)
  const noTopicsSelected = () => {
    const languagesWrapper = document.querySelector('#category__feed--lang'),
      schoolTopicWrapper = document.querySelector('#category__feed--school'),
      quizzesWrapper = document.querySelector('#category__feed--quiz');
    const wrappers = [languagesWrapper, schoolTopicWrapper, quizzesWrapper];

    wrappers.map(wrapper => {
      // Only showing message to find another category exercise if its empty
      if (document.querySelector('.category__feed--none-selected')) {
        if (wrapper.childElementCount <= 1) {
          wrapper.querySelector('.category__feed--none-selected').style.display = 'block';
        }
      }
    });
  };

  addExtendButton(); // Creates a button to extend to see more topics if there are more than what the div can contain
  closeAll(); // Initially closes all categories
  countTopics(); //Counts numbers of topics in category and displays it
  toggleOnClick(); // Functionality for opening and closing selection
  noTopicsSelected(); // For topic selection (after chosen excersise in category)
}

topicFunctions();
