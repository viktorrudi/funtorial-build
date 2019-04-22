'use strict'

class Topic {
  constructor(obj) {
    this.category = obj.category
    this.id = obj.id
    this.title = obj.title
    this.fullTitle = obj.fullTitle || ''
    this.link = obj.link
    this.image = obj.image || '<span></span>'
  }

  topic() {
    // Create topic object with necessary bootstrap required attributes
    let topic = document.createElement('div')
    topic.setAttribute('class', 'col-sm-6 topic')
    if (this.id) {
      topic.setAttribute('id', this.id)
    }
    return topic
  }

  build() {
    // Target main language wrapper in nav
    const category = document.querySelector(`.step__topics-feed--${this.category}`)

    // Gets the topic wrapper 
    const topic = this.topic()

    // Insert HTML of the selected language. This is displayed in the navbar on load
    topic.innerHTML =
      `<a href="${this.link}" data-toggle="tooltip" data-placement="top" title="${this.fullTitle}">
      <span class="step__topics--image" style="background-image: url('${this.image}')"></span>
      ${this.title}</a>`;

    // Add the selected language to the navbar
    category.appendChild(topic);
  }
}










// ********* Example content 
new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  fullTitle: 'Example',
  link: '#',
  image: 'img/flags/gb.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang asd ds2',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();

new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();

new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();

new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();

new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  category: 'languages',
  title: 'Some test lang wo id',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'languages',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'school-topics',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();
new Topic({
  id: 1,
  category: 'quizzes',
  title: 'Some test lang',
  link: '#',
  image: 'img/flags/no.svg'
}).build();


// export { Topic }
