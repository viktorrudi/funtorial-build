'use strict';

import data from './insert_data/statistics.js';

class CategoryStatistic {
  constructor(obj) {
    this.id = obj.id;
    this.category = obj.category;
    this.title = obj.title;
    this.fullTitle = obj.fullTitle || '';
    this.icon = obj.icon;
    this.mainStats = obj.mainStats;
    // mainStats.skillLevel
    // mainStats.timeSpent
    // mainStats.correctAnswers
    // mainStats.incorrectAnswers
    // mainStats.successRatio
    // mainStats.totalCredits
    this.otherStats = obj.otherStats;
    // otherStats.stat
    // otherStats.description
  }

  otherStatistics() {
    // Input is an array

    let output = `
      <div class='list-group'>
    `;

    for (let i = 0; i < this.otherStats.length; i++) {
      /* html */
      output += `
      <span class='list-group-item list-group-item-action flex-column align-items-start'>
        <div class='d-flex w-100 justify-content-between'>
          <h5 class='mb-1'>${this.otherStats[i].stat}</h5>
        </div>
        <small>${this.otherStats[i].description}</small>
      </span>
      `;
    }

    output += `
      </div>
    `;

    return output;
  }

  mainStatistics() {
    let statRow = document.createElement('tr');
    statRow.setAttribute('class', 'stat__row');

    /* html */
    let th = `
    <th class="stat__type--category stat__type--heading">
      <span class="stat__icon-wrapper">
    `;

    // If image is set, use it. If not, use category color
    if (this.icon) {
      /* html */
      th += `
        <object
          class="stat__icon--flag"
          data="${this.icon}"
          type="image/svg+xml"
        ></object>
      `;
    }

    /* html */
    th += `
    
      </span>
      <h3>${this.title}</h3>
    </th>
    `;

    /* html */
    statRow.innerHTML = `
      ${th}
      <td class="stat__type--skill">
          <h3 class="stats__stat">${this.mainStats.skillLevel}</h3>
          <p class="stats__description">Completion status</p>
      </td>
      <td class="stat__type--time-spent">
          <h3 class="stats__stat">${this.mainStats.timeSpent}</h3>
          <p class="stats__description">Time spent on subject</p>
      </td>
      <td class="stat__type--correct">
          <h3 class="stats__stat">${this.mainStats.correctAnswers}</h3>
          <p class="stats__description">Correct answers</p>
      </td>
      <td class="stat__type--incorrect">
          <h3 class="stats__stat">${this.mainStats.incorrectAnswers}</h3>
          <p class="stats__description">Incorrect answers</p>
      </td>
      <td class="stat__type--ratio">
          <h3 class="stats__stat">${this.mainStats.successRatio}%</h3>
          <p class="stats__description">Success ratio</p>
      </td>
      <td class="stat__type--total-credits">
          <h3 class="stats__stat">${this.mainStats.totalCredits}</h3>
          <p class="stats__description">Total credits earned</p>
      </td>

      <td
          class="stat__type--more"
          data-toggle="popover"
          data-placement="right"
          data-trigger="focus"
          tabindex="0"
          data-html="true"
          data-content="${this.otherStatistics()}"
      >
      <i class="fas fa-ellipsis-v"></i>
      </td>
      `;

    return statRow;
  }

  build() {
    // Languages
    const categoryLanguages = document.querySelector('.stats__category-languages table .stats__main');
    // School topics
    const categorySchoolTopics = document.querySelector('.stats__category-school-topics table .stats__main');
    // Quizzes
    const categoryQuizzes = document.querySelector('.stats__category-quizzes table .stats__main');

    let selectorToUse;
    if (this.category === 'language') {
      selectorToUse = categoryLanguages;
    } else if (this.category === 'school-topic') {
      selectorToUse = categorySchoolTopics;
    } else if (this.category === 'quiz') {
      selectorToUse = categoryQuizzes;
    }

    const statistics = this.mainStatistics();
    selectorToUse.appendChild(statistics);
  }
}

// Inserts each exercise into the page
data.forEach(statistic => {
  new CategoryStatistic(statistic).build();
});
