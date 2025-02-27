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
      for (const light of lights) {
        //console.log(light);
        light.setAttribute('animation', {
            property: 'intensity',
            to: 0.01,
            dur: 3000,
        });
      }
      setTimeout(() => {
        this.exitImmersiveView();
      }, 3000); // Adjusted to match the new fade duration
    }
},

exitImmersiveView: function () {
    if (document.querySelector("a-scene").is("vr-mode")) {
      document.querySelector("a-scene").exitVR();
      console.info("Exit VR mode… bye!");
    }
  },

  remove: function () {
    this.el.removeEventListener(this.data.event, this.onDrop);
  }
});