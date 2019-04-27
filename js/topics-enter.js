class Topic {
  constructor(obj) {
    this.id = obj.id
    this.title = obj.title
    this.fullTitle = obj.fullTitle || ''
    this.category = obj.category
    this.icon = obj.icon
    this.link = obj.link
  }
  build() {
    let selectorToUse;

    if (this.category == 'language') { selectorToUse = document.querySelector('#category__feed--lang') }
    else if (this.category == 'school-topic') { selectorToUse = document.querySelector('#category__feed--school') }
    else if (this.category == 'quiz') { selectorToUse = document.querySelector('#category__feed--quiz') }
    else { console.error('Topic category not matching. Use language, school-topic or quiz.') }

    const topicWrapper = document.createElement('div');
    topicWrapper.setAttribute('class', 'category__item');
    let toFeed = ``;
    toFeed += `
  <a data-topic-id="${this.id}" href="${this.link}" data-toggle="tooltip" data-placement="top" title="${this.fullTitle}">
    <span class="category__item--icon">
      <object data="img/${this.icon}" type="image/svg+xml"></object>
    </span>
    <p>${this.title}</p>
  </a>
  `;
    topicWrapper.innerHTML = toFeed;
    selectorToUse.appendChild(topicWrapper);
  }
}

for (let i = 0; i < 5; i++) {
  new Topic({
    id: 1,
    title: 'English',
    fullTitle: 'American English',
    category: 'language',
    icon: 'flags/gb.svg',
    link: '#'
  }).build();
}

for (let i = 0; i < 10; i++) {
  new Topic({
    id: 3,
    title: 'Test',
    category: 'quiz',
    icon: 'flags/cz.svg',
    link: '#'
  }).build();
}

for (let i = 0; i < 9; i++) {
  new Topic({
    id: 4,
    title: 'GGGG',
    category: 'school-topic',
    icon: 'flags/dk.svg',
    link: '#'
  }).build();
}


