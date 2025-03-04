import { quitGame } from "../utils/quitGame";

AFRAME.registerComponent('forge', {
    schema: {
      event: {type: 'string', default: 'drop'}
    },
  
    init: function () {
      this.onDrop = this.onDrop.bind(this);
      this.onGrab = this.onGrab.bind(this);
  
      this.el.addEventListener(this.data.event, this.onDrop);
      this.ironBar = document.querySelector('#iron_bar');
      this.el.addEventListener('undrop', this.onGrab);
  
      this.timer = null;
      this.timeLeft = 21;
      this.isPaused = false;
      this.isInDropZone = false;
    },
  
    onDrop: function (evt) {
      const dropZone = evt.detail.dropZone;
      const droppedEl = evt.detail.el;
      if (dropZone && dropZone.id === 'forgeDropZone' && droppedEl.id === 'iron_bar') {
        this.isInDropZone = true;
        this.startTimer();
        console.log('Iron bar dropped into drop zone');
      }
    },
  
    onGrab: function () {
        this.pauseTimer();
        console.log('Iron bar removed from drop zone');
    },
  
    startTimer: function () {
      this.timer = setInterval(() => {
        if (!this.isInDropZone) {
          this.pauseTimer();
        } else if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          this.timer = null;
          console.log('Timer finished');
          this.destroyIronBar();
        } else {
          console.log(this.timeLeft + ' seconds remaining');
          this.updateIronBarColor(25 - this.timeLeft); // Update the color based on elapsed time
        }
        this.timeLeft -= 1;
      }, 1000);
    },
  
    pauseTimer: function () {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        this.isPaused = true;
        console.log('Timer paused');
      }
    },
    
    updateIronBarColor: function (elapsedTime) {
      if (elapsedTime <= 1) {
      this.ironBar.setAttribute('color', ''); // Default color
      } else if (elapsedTime <= 3) {
      this.ironBar.setAttribute('color', '#c7c3a3');
      } else if (elapsedTime <= 5) {
      this.ironBar.setAttribute('color', '#e6db8c');
      } else if (elapsedTime <= 7) {
      this.ironBar.setAttribute('color', '#f2df55');
      } else if (elapsedTime <= 9) {
      this.ironBar.setAttribute('color', '#f7da05');
      } else if (elapsedTime <= 11) {
      this.ironBar.setAttribute('color', '#f7ae05');
      } else if (elapsedTime <= 13) {
      this.ironBar.setAttribute('color', '#ff7b00');
      } else if (elapsedTime <= 15) {
      this.ironBar.setAttribute('color', '#ff4d00');
      } else if (elapsedTime <= 17) {
      this.ironBar.setAttribute('color', '#ff2a00');
      } else if (elapsedTime <= 19) {
      this.ironBar.setAttribute('color', '#a6240a');
      } else if (elapsedTime <= 21) {
      this.ironBar.setAttribute('color', '#2e0b04');
      }
    },
    
    destroyIronBar: function () {
      if (this.ironBar && this.ironBar.parentNode) {
        this.ironBar.parentNode.removeChild(this.ironBar);
        console.log('Iron bar destroyed');
        quitGame(7000, 2);
      }
    },
  
    remove: function () {
      this.el.removeEventListener(this.data.event, this.onDrop);
      this.ironBar.removeEventListener('grab-start', this.onGrab);
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  });