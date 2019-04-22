const addExtendButton = () => {
 
 //Create buttons and fade effect
 const topicExtendBtnFade = document.createElement('div')
       topicExtendBtnFade.setAttribute('class', 'category__items--fade-overlay')
 const topicExtendBtn = document.createElement('div')
       topicExtendBtn.setAttribute('class','category__items--extend-btn')
 const topicExtendBtnArrow = document.createElement('i')
       topicExtendBtnArrow.setAttribute('class', 'fas fa-angle-down')
       topicExtendBtn.appendChild(topicExtendBtnArrow);

  const topicWrappers = Array.from(document.querySelectorAll('.category__items--wrapper'))

  topicWrappers.map(topicWrapper => {

  //Temporarely setting height to find out if div is overflowing
  topicWrapper.style.height = '135px'

  // If wrapper is overflowing - show buttons
  if (topicWrapper.scrollHeight > topicWrapper.clientHeight) {
   topicWrapper.appendChild(topicExtendBtnFade.cloneNode(true))
   topicWrapper.appendChild(topicExtendBtn.cloneNode(true))
   console.log('overflowing');
  }

  // Removing temp height set. Going back to only using max-height for animation puropses
  topicWrapper.style.height = 'unset'
 })

}

const closeAll = () => {
 const wrappers = Array.from(document.querySelectorAll('.category__items--wrapper'))
 wrappers.map(wrapper => {
  wrapper.classList.add('wrapper__collapsed')
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
  let btnArrow = e.path[0].childNodes[0]

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
  languages() {
   const allTopics = Array.from(document.querySelectorAll('#category__feed--lang .category__item'))
   const displayCounter = document.querySelector('.category__type--languages .topic__counter')
   displayCounter.innerHTML = allTopics.length
  },
  schoolTopics() {
   const allTopics = Array.from(document.querySelectorAll('#category__feed--school .category__item'))
   const displayCounter = document.querySelector('.category__type--school .topic__counter')
   displayCounter.innerHTML = allTopics.length
  },
  quizzes() {
   const allTopics = Array.from(document.querySelectorAll('#category__feed--quiz .category__item'))
   const displayCounter = document.querySelector('.category__type--quiz .topic__counter')
   displayCounter.innerHTML = allTopics.length
  }
 }
 topic.languages()
 topic.schoolTopics()
 topic.quizzes()
}

addExtendButton()
closeAll() // Initially closes all categories
countTopics() //Counts numbers of topics in category and displays it 
toggleOnClick() // Functionality for opening and closing selection