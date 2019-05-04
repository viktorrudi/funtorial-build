'use strict';

import data from './insert_data/available_exercises.js';

class FrontpageTopic {
  constructor(obj) {
    this.id = obj.id;
    this.category = obj.category;
    this.title = obj.title;
    this.fullTitle = obj.fullTitle || '';
    this.link = obj.link;
    this.icon = obj.icon || '';
  }

  topic() {
    // Create topic object with necessary bootstrap required attributes
    let topic = document.createElement('div');
    topic.setAttribute('class', 'col-sm-6 topic');
    if (this.id) {
      topic.setAttribute('id', this.id);
    }
    return topic;
  }

  build() {
    // Target main language wrapper in nav
    const category = document.querySelector(`.step__topics-feed--${this.category}`);

    // Gets the topic wrapper
    const topic = this.topic();

    // Insert HTML of the selected language. This is displayed in the navbar on load
    /* html */
    topic.innerHTML = `<a href="${this.link}" data-toggle="tooltip" data-placement="top" title="${this.fullTitle}">
      <span class="step__topics--image" style="background-image: url('${this.icon}')"></span>
      ${this.title}</a>`;

    // Add the selected language to the navbar
    category.appendChild(topic);
  }
}

// Inserts each exercise into the page
data.forEach(exercise => {
  new FrontpageTopic(exercise).build();
});
