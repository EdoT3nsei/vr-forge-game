AFRAME.registerComponent('tesselation-square', {
    schema: {
        depth: {type: 'number', default: 10},
        width: {type: 'number', default: 10},
        boxsize: {type: 'number', default: 2},
        gap: {type: 'number', default: 0.1},
        color: {type: 'color', default: '#ffffff'}
    },
    init: function () {
        //console.log(this.data.color);
        //console.log('tesselation-square');
        const box = document.createElement('a-box');
        box.setAttribute('width', this.data.boxsize);
        box.setAttribute('depth', this.data.boxsize);
        box.setAttribute('color', this.data.color);
        const hue = parseInt(this.data.color.replace('#', ''), 16) % 360;
        //console.log(hue);
        const saturation = 50;
        
        for (let x = 0; x < this.data.width; x++) {
            for (let y = 0; y < this.data.depth; y++) {
                const clone = box.cloneNode();
                clone.setAttribute('position', `${x * (this.data.boxsize + this.data.gap)} 0 ${y * (this.data.boxsize + this.data.gap)}`);
                
                const lightness = 50 + Math.random() * 70;
                const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
                clone.setAttribute('color', color);
                //console.log(color);
                
                this.el.appendChild(clone);
                //console.log('x', x, 'y', y, 'color', color);
            }
        }
    },
    update: function () {
    },
    tick: function () {
    }
});