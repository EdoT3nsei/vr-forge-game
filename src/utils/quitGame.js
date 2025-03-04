export function quitGame(time, endCode) {

    console.log('Exiting game with code ' + endCode);
    const cameraRig = document.querySelector('#head');
    const text = document.createElement('a-text');
    text.setAttribute('id', 'quit-text');
    let message;
    switch (endCode) {
      case 1:
        message = 'Well done ! You will be redirected on the menu in a few seconds.';
        break;
      case 2:
        message = 'The ingot got melted completely, you will be redirected on the menu in a few seconds.';
        break;
      case 3:
        message = 'You hit the metal too much and it broke, you will be redirected on the menu in a few seconds.';
        break;
      case 4:
        message = 'The bar has not been melted, you will be redirected on the menu in a few seconds.';
        break;
      case 5:
        message = 'The bar hasn\'t been hit hard enough., you will be redirected on the menu in a few seconds.';
        break;
      default:
        message = 'Thanks for playing, you will be redirected to the menu in a few seconds.';
    }
    text.setAttribute('value', message);
    text.setAttribute('align', 'center');
    text.setAttribute('anchor', 'center');
    text.setAttribute('baseline', 'center');
    text.setAttribute('width', 2);
    text.setAttribute('wrapCount', 30);
    text.setAttribute('position', '0 0 -1');
    text.setAttribute('color', '#ffffff');
    text.setAttribute('opacity', 100);
    text.setAttribute('visible', true);
    text.setAttribute('font', 'mozillavr');
    text.setAttribute('scale', '0.5 0.5 0.5');

    // Add text to scene
    cameraRig.appendChild(text);
  
    // Set initial fog
    const scene = document.querySelector('a-scene');
    scene.setAttribute('fog', {
      type: 'exponential',
      color: '#000000',
      density: 0.0001
    });
  
    // Animate fog density
    scene.setAttribute('animation__fog', {
      property: 'fog.density',
      from: 0.0001,
      to: 2,
      dur: time,
      easing: 'easeInQuad'
    });
  
    // Exit VR and reload page after animation
    setTimeout(() => {
        
      if (document.querySelector('a-scene').is('vr-mode')) {
        document.querySelector('a-scene').exitVR();
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, time);
}