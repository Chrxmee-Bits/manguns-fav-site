// script.js
const produceMangosButton = document.getElementById('produce-mangos');
const shootGunsButton = document.getElementById('shoot-guns');
const mangoContainer = document.getElementById('mango-container');
const gunSound = document.getElementById('gun-sound');

produceMangosButton.addEventListener('click', () => {
  const mango = document.createElement('div');
  mango.classList.add('mango');
  mango.style.left = ${Math.random() * (window.innerWidth - 50)}px;
  mangoContainer.appendChild(mango);
  mango.addEventListener('animationend', () => {
    mango.remove();
  });
});

shootGunsButton.addEventListener('click', () => {
  gunSound.play();
  const gun = document.createElement('div');
  gun.classList.add('gun');
  gun.style.top = ${Math.random() * (window.innerHeight - 20)}px;
  mangoContainer.appendChild(gun);
  gun.addEventListener('animationend', () => {
    gun.remove();
  });
});
