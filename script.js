// script.js
// add event listener to mango button
document.querySelector('.mango-button').addEventListener('click', () => {
  // add sound effect
  const audio = new Audio('mango.mp3.mp3');
  audio.play();
});

// add event listener to music button
document.querySelector('.music-button').addEventListener('click', () => {
  // add sound effect
  const audio = new Audio('mango.mp3');
  audio.play();
});
