// add event listener to mango button
document.querySelector('.mango-button').addEventListener('click', () => {
  // add sound effect
  const audio = new Audio('mango.mp3');
  audio.play();
});

// add event listener to guns button
document.querySelector('.guns-button').addEventListener('click', () => {
  // show pistol image and play pistol sound
  const pistolContainer = document.querySelector('.pistol-container');
  pistolContainer.style.display = 'block';
  const pistolAudio = document.querySelector('.pistol-audio');
  pistolAudio.play();
  // hide pistol image and stop pistol sound after 3 seconds
  setTimeout(() => {
    pistolContainer.style.display = 'none';
    pistolAudio.pause();
    pistolAudio.currentTime = 0;
  }, 3000);
});

// add event listener to music button
document.querySelector('.music-button').addEventListener('click', () => {
  // add sound effect
  const audio = new Audio('mango.mp3');
  audio.play();
});
