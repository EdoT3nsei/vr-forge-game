import { quitGame } from "../utils/quitGame";

AFRAME.registerComponent('water-barrel', {
  schema: {
    event: {type: 'string', default: 'drop'},
    validId: {type: 'string', default: 'iron_bar'}
  },

  init: function () {
    this.onDrop = this.onDrop.bind(this);
    this.el.addEventListener(this.data.event, this.onDrop);
},

onDrop: function (evt) {
    const droppedEl = evt.detail.el;
    
    const waterSound = document.createElement('a-entity');
    waterSound.setAttribute('sound', 'src: url(./assets/sounds/water-splash.mp3); positional: false; volume: 0.5');
    waterSound.addEventListener('sound-loaded', () => {
      waterSound.components.sound.playSound();
    });
    this.el.appendChild(waterSound);

    const lights = document.querySelectorAll('a-light');

    if (droppedEl.id === 'iron_bar') {
      const smoke = document.createElement('a-entity');
      smoke.setAttribute('gltf-model', '#smoke');
      smoke.setAttribute('position', '0.33 0.46 -1.55');
      smoke.setAttribute('scale', '1 1 1');
      smoke.setAttribute('animation-mixer', 'clip: Default Take; loop: repeat');
      this.el.sceneEl.appendChild(smoke);
      if (droppedEl.getAttribute('material').color === '#d1cdcd') {
        quitGame(7000, 4)
      }
      else {
        if (droppedEl.getAttribute('scale').y <= -0.2) {
          quitGame(7000, 5);
        } else {
          quitGame(7000, 1);
        }
      }
    }
},

  remove: function () {
    this.el.removeEventListener(this.data.event, this.onDrop);
  }
});