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
 let categories = Array.from(document.querySelectorAll('.category'));
 for (let i = 0; i < categories.length; i++) {
  categories[i].childNodes[1].childNodes[3].childNodes[1].innerHTML 
  = categories[i].childNodes[3].childElementCount - 2
 }
}

closeAll() // Initially closes all categories
countTopics() //Counts numbers of topics in category and displays it 
toggleOnClick() // Functionality for opening and closing selection