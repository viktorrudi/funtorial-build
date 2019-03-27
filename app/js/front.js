var curIndex = 0,
 imgDuration = 3000,
 slider = document.querySelector('.heading__slideshow--current'),
 slides = slider.childNodes;
imgArray = [
 'https://placeimg.com/800/400/animals',
 'https://placeimg.com/800/400/nature',
 'https://placeimg.com/800/400/grayscale'];

function buildSlideShow(arr) {
 for (i = 0; i < arr.length; i++) {
  var img = document.createElement('img');
  img.src = arr[i];
  slider.appendChild(img);
 }
}

function slideShow() {

 function fadeIn(e) {
  e.className = "fadeIn";
 };
 function fadeOut(e) {
  e.className = "";
 };

 fadeOut(slides[curIndex]);
 curIndex++;
 if (curIndex == slides.length) {
  curIndex = 0;
 }

 fadeIn(slides[curIndex]);

 setTimeout(function () {
  slideShow();
 }, imgDuration);
};

buildSlideShow(imgArray);
slideShow();