'use strict';

function statisticFunctions() {
  function toggleIdentifiers() {
    const languagesWrapper = document.querySelector('.stats__category-languages table'),
      schoolTopicWrapper = document.querySelector('.stats__category-school-topics table'),
      quizzesWrapper = document.querySelector('.stats__category-quizzes table');

    let wrappers = [languagesWrapper, schoolTopicWrapper, quizzesWrapper];
    wrappers.map(wrapper => {
      if (wrapper.querySelector('.stats__main').childElementCount === 0) {
        wrapper.style.display = 'none';
      }
    });
  }

  function showHiddenStatisticRows(total) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.setAttribute('class', 'stat__row--see-more');
    td.setAttribute('colspan', 8);
    td.innerHTML = `See all (${total})`;
    tr.appendChild(td);
    tr.addEventListener('click', e => {
      const statRows = Array.from(e.srcElement.parentElement.parentElement.children);
      statRows.map(statRow => {
        statRow.style.display = 'table-row';
      });
      e.srcElement.style.display = 'none';
    });
    return tr;
  }

  function hideStatisticRows() {
    const languagesWrapper = document.querySelector('.stats__category-languages table .stats__main'),
      schoolTopicWrapper = document.querySelector('.stats__category-school-topics table .stats__main'),
      quizzesWrapper = document.querySelector('.stats__category-quizzes table .stats__main');
    let wrappers = [languagesWrapper, schoolTopicWrapper, quizzesWrapper];

    wrappers.map(wrapper => {
      const seeMore = showHiddenStatisticRows(wrapper.children.length);
      for (let i = 0; i < wrapper.children.length; i++) {
        if (wrapper.children[i].classList.contains('stat__row') && wrapper.children[i].sectionRowIndex > 2) {
          wrapper.children[i].style.display = 'none';
          wrapper.appendChild(seeMore);
        }
      }
    });
  }
  toggleIdentifiers();
  hideStatisticRows();
}

statisticFunctions();
