class Language {
 constructor(obj) {
  this.id = obj.id
  this.name = obj.name
  this.icon = obj.icon
  this.shorthand = obj.shorthand
  this.link = obj.link
 }
 build() {

 }

}


 new Language({
  id: 1,
  name: 'English',
  type: 'language',
  icon: 'flags/gb.svg',
  shorthand: 'en',
  link: '#'
 }).build();

