const closeAll = () => {
 const wrappers = Array.from(document.querySelectorAll('.category__items--wrapper'));
 wrappers.map(wrapper => {
  wrapper.classList.add('wrapper__collapsed');
 })
}

const toggleOnClick = () => {
 const buttons = Array.from(document.querySelectorAll('.category__items--extend-btn'))
 buttons.map(button => {
  button.addEventListener('click', (e) => {
   closeCat(e)
  })
 })

 const closeCat = (e) => {
  //Append wrapper_closed class on click
  e.path[1].classList.toggle('wrapper__collapsed')
  let btnArrow = e.path[0].childNodes[0];

  //Rotate arrow if opened
  if (btnArrow.classList[1] == 'fa-angle-down') {
   btnArrow.classList = 'fa fa-angle-up';
  } else {
   btnArrow.classList = 'fa fa-angle-down';
  }
 }
}

const countTopics = () => {
 const topic = {
  languages(){
   const allTopics = Array.from(document.querySelectorAll('#category__feed--lang .category__item'))
   const displayCounter = document.querySelector('.category__type--languages .topic__counter')
   displayCounter.innerHTML = allTopics.length
  },
  schoolTopics(){
   const allTopics = Array.from(document.querySelectorAll('#category__feed--school .category__item'))
   const displayCounter = document.querySelector('.category__type--school .topic__counter')
   displayCounter.innerHTML = allTopics.length
  },
  quizzes(){
   const allTopics = Array.from(document.querySelectorAll('#category__feed--quiz .category__item'))
   const displayCounter = document.querySelector('.category__type--quiz .topic__counter')
   displayCounter.innerHTML = allTopics.length
  }
 }
 topic.languages()
 topic.schoolTopics()
 topic.quizzes()
}

closeAll() // Initially closes all categories
countTopics() //Counts numbers of topics in category and displays it 
toggleOnClick() // Functionality for opening and closing selection