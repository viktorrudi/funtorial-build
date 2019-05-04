'use strict';

import data from './insert_data/available_exercises.js';
class Topic {
  constructor(obj) {
    this.id = obj.id;
    this.chosen = obj.chosen;
    this.title = obj.title;
    this.fullTitle = obj.fullTitle || '';
    this.category = obj.category;
    this.icon = obj.icon;
    this.link = obj.link;
  }
  build() {
    // Sorts out to only display exercises which are set to chosen and on the right page
    if (!document.querySelector('.selection__new-topics') && this.chosen === false) {
      return;
    }

    // Initialize variable for which block to put the exercise into. Logic in if-clause
    let selectorToUse;

    if (this.category == 'language') {
      selectorToUse = document.querySelector('#category__feed--lang');
    } else if (this.category == 'school-topic') {
      selectorToUse = document.querySelector('#category__feed--school');
    } else if (this.category == 'quiz') {
      selectorToUse = document.querySelector('#category__feed--quiz');
    } else {
      console.error('Topic category not matching. Use language, school-topic or quiz.');
    }

    const topicWrapper = document.createElement('div');
    topicWrapper.setAttribute('class', 'category__item');

    // If no flag is in object, dont add it, which will use the language color for the icon
    let icon = '';
    if (this.icon) {
      icon = `<object data="${this.icon}" type="image/svg+xml"></object>`;
    }

    // Output setup
    let toFeed = ``;
    /* html */
    toFeed += `
    <a data-topic-id="${this.id}" 
    href="${this.link}" 
    data-toggle="tooltip" 
    data-placement="top" title="${this.fullTitle}">
      <span class="category__item--icon">
        ${icon}
      </span>
      <p>${this.title}</p>
    </a>
  `;
    topicWrapper.innerHTML = toFeed;
    selectorToUse.appendChild(topicWrapper);
  }
}
// Inserts each exercise into the page
data.forEach(exercise => {
  new Topic(exercise).build();
});
