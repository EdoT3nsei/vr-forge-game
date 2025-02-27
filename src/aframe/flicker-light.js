AFRAME.registerComponent('flicker-light', {
    schema: {
      minIntensity: { type: 'number', default: 1.5 },
      maxIntensity: { type: 'number', default: 2.8 },
      minDuration: { type: 'number', default: 300 },  // Durée minimale de la transition (ms)
      maxDuration: { type: 'number', default: 800 }   // Durée maximale de la transition (ms)
    },
    init: function () {
      // Récupère l'intensité initiale ou utilise la valeur minIntensity par défaut.
      const initialIntensity = this.el.getAttribute('light').intensity || this.data.minIntensity;
      this.currentIntensity = initialIntensity;
      this.startIntensity = initialIntensity;
      this.targetIntensity = this.randomIntensity();
      this.transitionDuration = this.randomDuration();
      this.transitionStartTime = Date.now();
      this.el.setAttribute('light', 'intensity', this.currentIntensity);
    },
    randomDuration: function() {
      return Math.random() * (this.data.maxDuration - this.data.minDuration) + this.data.minDuration;
    },
    randomIntensity: function() {
      return Math.random() * (this.data.maxIntensity - this.data.minIntensity) + this.data.minIntensity;
    },
    // Fonction d'easing ease-out quadratic
    easeOutQuad: function(t) {
      return 1 - (1 - t) * (1 - t);
    },
    tick: function () {
      const now = Date.now();
      const elapsed = now - this.transitionStartTime;
      const t = elapsed / this.transitionDuration;
      if (t >= 1) {
        // Fin de la transition : on fixe l'intensité à la valeur cible
        this.currentIntensity = this.targetIntensity;
        this.el.setAttribute('light', 'intensity', this.currentIntensity);
        // On programme la prochaine transition
        this.startIntensity = this.currentIntensity;
        this.targetIntensity = this.randomIntensity();
        this.transitionDuration = this.randomDuration();
        this.transitionStartTime = now;
      } else {
        // Interpolation avec easing ease-out
        const easedT = this.easeOutQuad(t);
        this.currentIntensity = this.startIntensity + (this.targetIntensity - this.startIntensity) * easedT;
        this.el.setAttribute('light', 'intensity', this.currentIntensity);
      }
    }
  });
  
 