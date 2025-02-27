AFRAME.registerComponent('validate-drop', {
    schema: {
      validId: { type: 'string' }
    },
    init: function () {
    console.log('validate-drop initialized');
      this.el.addEventListener('dragover-start', (evt) => {
        console.log('dragover-start');
        const droppedEl = evt.detail.dropped;
        if (droppedEl.id !== this.data.validId) {
          evt.preventDefault();
          console.log(`Only ${this.data.validId} can be dropped here.`);
        }
      });
    }
  });