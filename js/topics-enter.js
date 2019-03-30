class Topic {
 constructor(obj) {
  this.id = obj.id
  this.cc = obj.cc
  this.name = obj.name
  this.type = obj.type
  this.icon = obj.icon
  this.link = obj.link
 }
 build() {
  let selectorToUse;
  
  if      (this.type == 'language')     {selectorToUse = document.querySelector('#category__feed--lang')} 
  else if (this.type == 'school-topic') {selectorToUse = document.querySelector('#category__feed--school')} 
  else if (this.type == 'quiz')         {selectorToUse = document.querySelector('#category__feed--quiz')} 
  else    {console.error('Topic type not matching. Use language, school-topic or quiz.')}

  let topicWrapper = document.createElement('div');
  topicWrapper.setAttribute('class', 'category__item');
  let toFeed = ``;
  toFeed += `
  <a data-topic-id="${this.id}" href="${this.link}">
    <span class="category__item--icon">
      <object data="img/${this.icon}" type="image/svg+xml"></object>
    </span>
    <p>${this.name}</p>
  </a>
  `;
  topicWrapper.innerHTML = toFeed;
  selectorToUse.appendChild(topicWrapper);
 }
}

for(let i = 0; i < 10;i++){
 new Topic({
  id: 1,
  name: 'English asnd asdbas',
  type: 'language',
  icon: 'flags/gb.svg',
  link: '#'
 }).build();
}

for(let i = 0; i < 15;i++){
 new Topic({
  id: 3,
  name: 'Test',
  type: 'quiz',
  icon: 'flags/cz.svg',
  link: '#'
 }).build();
}

for(let i = 0; i < 3;i++){
 new Topic({
  id: 4,
  name: 'GGGG',
  type: 'school-topic',
  icon: 'flags/dk.svg',
  link: '#'
 }).build();
}


