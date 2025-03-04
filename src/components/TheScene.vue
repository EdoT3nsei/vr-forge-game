<script setup>
  import { ref } from 'vue';
  import { quitGame } from '../utils/quitGame.js';

  import TheCameraRig from './TheCameraRig.vue';
  import '../aframe/tesselation-square.js';
  import '../aframe/emit-when-near.js';
  import '../aframe/event-set.js';
  import '../aframe/listen-to.js';
  import '../aframe/simple-grab.js';
  import '../aframe/clickable.js';
  import '../aframe/forge.js';
  import '../aframe/outline.js';
  import '../aframe/water_barrel.js';
  import '../aframe/flicker-light.js';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });
  
  let hitCount = 0;

  const allAssetsLoaded = ref(false);

  const hammerHitMetal = (event) => {
    hitCount++;
    console.log(`Hammer hit the iron bar ${hitCount} times`);
    const ironBar = event.target;
    let clingSoundId = '#cling01';

    if (hitCount === 15 || hitCount === 16 || hitCount === 17) clingSoundId = '#cling02';
    else if (hitCount === 18 || hitCount === 19) clingSoundId = '#cling03';
    else if (hitCount === 20 || hitCount === 21 || hitCount === 22) clingSoundId = '#cling04';
    else if (hitCount === 23) clingSoundId = '#cling05';

    const clingSound = document.querySelector(clingSoundId);
    clingSound.components.sound.playSound();

    if (hitCount < 23) {
      const color = ironBar.getAttribute('color');
      const currentScale = ironBar.getAttribute('scale');
      const newScale = {
        x: currentScale.x * 1.008,
        y: currentScale.y * 0.8,
        z: currentScale.z * 1.001,
      };
      ironBar.setAttribute('scale', newScale);
    } else if (ironBar.getAttribute('color') === '#2e0b04') {
      ironBar.parentNode.removeChild(ironBar);
      easterEgg();
    } else {
      console.log('The iron bar breaks');
      ironBar.parentNode.removeChild(ironBar);
      quitGame(7000, 3);
    }
  }

  const easterEgg = () => {
    const sword = document.createElement('a-entity');
    sword.setAttribute('gltf-model', '#sword');
    sword.setAttribute('position', '1.839 0.99 0.446');
    sword.setAttribute('scale', '0.02 0.02 0.02');
    sword.setAttribute('rotation', '0 -52.58 0');
    document.querySelector('a-scene').appendChild(sword);
    quitGame(7000, 1);
  }

</script>

<template>
  <a-scene
    background="color: #AECCE4;"
    fog="type: linear; color: #86a3cf"
    outline
    obb-collider="showColliders: false"
  >

  <a-assets @loaded="allAssetsLoaded = true">
    <img id="sky" src="/assets/images/quarry_04_puresky.jpg">
    <a-asset-item id="hammer" src="./assets/3d_assets/hammer_v2.glb"></a-asset-item>
    <a-asset-item id="pince" src="./assets/3d_assets/pince.glb"></a-asset-item>
    <a-asset-item id="anvil" src="./assets/3d_assets/anvil.glb"></a-asset-item>
    <a-asset-item id="forge" src="./assets/3d_assets/forge_version3.glb"></a-asset-item>
    <a-asset-item id="box" src="./assets/3d_assets/wood_box.glb"></a-asset-item>
    <a-asset-item id="rack" src="./assets/3d_assets/lit_rack.glb"></a-asset-item>
    <a-asset-item id="waterbarrel" src="./assets/3d_assets/water-barrel.glb"></a-asset-item>
    <a-asset-item id="lantern" src="./assets/3d_assets/lantern.glb"></a-asset-item>
    <a-asset-item id="smoke" src="./assets/3d_assets/smoke.glb"></a-asset-item>
    <a-asset-item id="fire" src="./assets/3d_assets/fire.glb"></a-asset-item>
    <a-asset-item id="road" src="./assets/3d_assets/stone-road.glb"></a-asset-item>
    <a-asset-item id="house" src="./assets/3d_assets/house.glb"></a-asset-item>
    <a-asset-item id="house2" src="./assets/3d_assets/house_2.glb"></a-asset-item>
    <a-asset-item id="sword" src="./assets/3d_assets/sword.glb"></a-asset-item>
  </a-assets>

  <template v-if="allAssetsLoaded">

    <a-sky src="#sky"></a-sky>
    <a-plane
      id="grass"
      color="#96846b"
      height="50"
      width="50"
      rotation="-90 0 0"
      position="0 0 0"
    ></a-plane>

    <a-entity
      gltf-model="#forge"
      scale="1 1 1"
      position="-0.5 0 -3.6"
    ></a-entity>

    <a-entity
      gltf-model="#smoke"
      scale="2 2 2"
      position="11.4 10.33 5.1"
      animation-mixer="clip: Default Take; loop: repeat;"
    ></a-entity>

    <a-entity
      gltf-model="#road"
      scale="1.2 1 5.66"
      position="4.48 0 2"
    ></a-entity>
    <a-entity
      gltf-model="#road"
      scale="1.2 1 5.66"
      position="-1.98 0 5.98"
      rotation="0 90 0"
    ></a-entity>

    <a-entity
      gltf-model="#house"
      scale="20 20 20"
      position="10 0 -1"
    ></a-entity>

    <a-entity
      gltf-model="#house"
      scale="20 20 20"
      position="4.89 0 12.93"
      rotation="0 180 0"
    ></a-entity>

    <a-entity
      gltf-model="#house"
      scale="20 20 20"
      position="-10 0 12.93"
      rotation="0 180 0"
    ></a-entity>

    <a-entity
      gltf-model="#house2"
      scale="3 3 3"
      position="9 0 6"
      rotation="0 270 0"
    ></a-entity>

    <a-entity
      gltf-model="#house2"
      scale="3 3 3"
      position="-0.55 0 10.87"
      rotation="0 90 0"
    ></a-entity>

    <a-entity
      gltf-model="#house2"
      scale="3 3 3"
      position="-3.99 0 10.87"
      rotation="0 90 0"
    ></a-entity>

    <a-plane
      id="window_blind"
      color="black"
      height="2"
      width="2"
      rotation="0 -90 0"
      position="7.44 1.26 -1.38"
      scale="1.77 1.00 1.00"
    ></a-plane>
  
    <a-plane
      id="window_blind"
      color="black"
      height="2"
      width="2"
      rotation="0 180 0"
      position="4.47 1.26 10"
      scale="1.77 1.00 1.00"
    ></a-plane>
    
    <a-entity
      gltf-model="#box"
      scale="0.4 0.4 0.4"
      position="1 0 1.6"
    ></a-entity>
    
    <a-entity
      gltf-model="#box"
      scale="0.4 0.4 0.4"
      position="1 0 2.6"
    ></a-entity>

    <a-entity
      gltf-model="#lantern"
      scale="0.1 0.1 0.1"
      position="2.85 1.5 -0.21"
      rotation="0 -22.67 0"
    ></a-entity>

    <a-entity
      gltf-model="#anvil"
      scale="1.3 1.3 1.3"
      position="1.8 0 0.4"
      rotation="0 -100 0"

      ><a-box
        id="anvilDropZone"
        visible="false"
        position="0.019 0.757 -0.004"
        scale="0.91 0.01 0.29"
        rotation="0 0 0"
        simple-grab-drop-zone
        clickable
        validate-drop="validId: #iron_bar"
      ></a-box>

    </a-entity>

    <a-entity
      id="hammer_container"
      simple-grab
      
      clickable
      scale="0.27 0.41 0.21"
      position="0.380 1.67 -1.55"
      rotation="180 0 0"
      geometry="primitive:box"
      material="visible:false"
      >  
        <a-entity
          gltf-model="#hammer"
          scale="2.68 2 4"
          position="0 0.65 0"
          rotation="180 0 0"
          outline-on-event
          listen-to__grab="target: #hammer_container; event: grab; emit: taken"
          listen-to__drop="target: #hammer_container; event: drop; emit: untaken"
          event-set__taken_rotation="event:taken; attribute: rotation; value: 0 90 270"
          event-set__untaken_rotation="event:untaken; attribute: rotation; value: 180 0 0"
          event-set__taken_position="event: taken; attribute: position; value: 0 -0.1 0"
          event-set__untaken_position="event: untaken; attribute: position; value: 0 0.65 0"
          event-set__taken_scale="event:taken; attribute: scale; value: 2.68 4 4"
          event-set__untaken_scale="event:untaken; attribute: scale; value: 2.68 2 4"
        >
        <a-box
        obb-collider
        scale="0.25 0.13 0.13"
        position="0 0.37 0"
        visible="false"
        >
        </a-box>
      </a-entity> 
    </a-entity>
         
    <a-box
      id="iron_bar"
      position="0.542 0.955 1.67"
      scale="0.7 -0.2 0.13"
      rotation="0 90 0"
      clickable
      simple-grab
      obb-collider
      color="#d1cdcd"
      @obbcollisionstarted="hammerHitMetal"
      @obbcollisionended="handleCollisionEnd"
    ></a-box>

    <a-box
      id="invisible-drop-box"
      visible="false"
      position="0.358 1.6 -1.49"
      scale="1.25 -0.09 0.28"
      rotation="0 0 0"
      simple-grab-drop-zone
      clickable
    ></a-box>

    <a-box
      id="forgeDropZone"
      visible="false"
      position="-1.243 0.621 -0.612"
      scale="0.66 0.19 0.82"
      simple-grab-drop-zone
      clickable
      forge
      validate-drop="validId: #iron_bar"
    >
      <a-entity
        id="fire"
        sound="src: url(./assets/sounds/fire.mp3); positional:flase; volume 2; autoplay: true"
      ></a-entity>
    </a-box>

    <a-entity
      gltf-model="#fire"
      scale="0.8 0.8 0.8"
      position="-1.19 0.45 -0.68"
      rotation="0 0 -30"
      animation-mixer="clip: Default Take; loop: repeat;"
    ></a-entity>

    <a-entity
      gltf-model="#rack"
      scale="1 1 1"
      position="0.27 1.56 -1.6"
    ></a-entity>

    <a-entity
      gltf-model="#waterbarrel"
      scale="0.8 0.8 0.8"
      position="0.41 0 -1.31"
      visible="true"
      >
        <a-box
          id="water-drop-box"
          visible="false"
          color="blue"
          position="0 1.04 0"
          scale="0.04 -0.63 0.52"
          rotation="0 0 270"
          simple-grab-drop-zone
          clickable
          water-barrel
        ></a-box>
    </a-entity>

    <a-entity
      id="cling01"
      sound="src: url(./assets/sounds/cling_01.mp3); positional:false; volume 2; autoplay: false"
    ></a-entity>
    <a-entity
      id="cling02"
      sound="src: url(./assets/sounds/cling_02.mp3); positional:false; volume 2; autoplay: false"
    ></a-entity>
    <a-entity
      id="cling03"
      sound="src: url(./assets/sounds/cling_03.mp3); positional:false; volume 2; autoplay: false"
    ></a-entity>
    <a-entity
      id="cling04"
      sound="src: url(./assets/sounds/cling_04.mp3); positional:false; volume 2; autoplay: false"
    ></a-entity>
    <a-entity
      id="cling05"
      sound="src: url(./assets/sounds/cling_05.mp3); positional:false; volume 2; autoplay: false"
    ></a-entity>

    <a-light
      type="point"
      color="#FFA500"
      intensity="1.5"
      distance="2.180"
      decay="5.2"
      position="-1.21 0.57 -0.61"
      flicker-light="minIntensity: 0.4; maxIntensity: 2; minDuration: 200; maxDuration: 700">
    </a-light>

    <a-light
      type="point"
      color="#FFA500"
      intensity="0.1"
      distance="2.180"
      decay="5.2"
      position="2.81 1.27 -0.18"
      flicker-light="minIntensity: 0.8; maxIntensity: 1.2; minDuration: 200; maxDuration: 700">
    </a-light>

    <a-light type="ambient" color="#888" intensity="1"></a-light>
    <a-light type="directional" color="#fde5ff" intensity="2" position="-9.11 13.44 -0.86"></a-light>
    <a-light type="directional" color="#b2a8ff" intensity="2" position="2.4 13.44 -15.22"></a-light>
    

    </template>

    <TheCameraRig />

  </a-scene>
</template>