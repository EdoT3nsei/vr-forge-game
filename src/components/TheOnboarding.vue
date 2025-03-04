<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
    document.querySelector('a-scene').emit('enter-scene');
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Become a Blacksmith</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Start Experience</button>
      <div class="licences">
        <section>
            <ul>
              <li>The royal blacksmith is absent and we need someone to replace him. You have been chosen to forge the blades that will pierce our enemies.</li>
              <br>
              <li>Here's how to forge a proper blade:</li>
              <br>
                <ul>
                  <li>1. Heat the steel ingot in the forge. Be careful not to make it too hot!</li>
                  <li>2. Bring the hot ingot to the anvil and hammer it until its shape is suitable. Be careful not to hit it too much!</li>
                  <li>3. When the blade seems right, plunge it into the water barrel and this will complete your task.</li>
                </ul>
                <br>
              <li>Don't disappoint us!</li>
            </ul>
        </section>
        <section>
          <h4>Code source</h4>
          <blockquote><a href="https://github.com/EdoT3nsei/vr-forge-game">Github repo</a></blockquote>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/" target="_blank">aframe-multi-camera</a>
          </dt><dd>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/medieval-forge-game-ready-low-poly-f1a1067a73e9439d91bc139a75d2792a" target="_blank">Medieval Forge</a>
          </dt>
          <dd>by Sergi Trojanski on Sketchfab under CC License</dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/crate-the-mystery-of-stalore-9-a96cc257866c47ab93d52fa4dd598ae0" target="_blank">Wooden Crates</a>
          </dt>
          <dd>by Revilo on Sketchfab under CC License</dd>

          <dt>
            <a href="https://sketchfab.com/kyan0s/collections/medieval-fantasy-contest-blacksmiths-workshop-a013c33e56a44b479cc527e2dc992b7f" target="_blank">Medieval Fantasy Workshop Assets</a>
          </dt>
          <dd>Collection by kyan0s on Sketchfab under CC License</dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/lowpoly-parchment-e8339f1804774f9ea48651be9df94eda" target="_blank">Lowpoly Parchment</a>
          </dt>
          <dd>by lucasminer99 on Sketchfab under CC License</dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/lantern-low-poly-ce5171d461fc48eebf6ad96878465a85" target="_blank">Lowpoly Lantern</a>
          </dt>
          <dd>by aetherowl on Sketchfab under CC License</dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/smoke-d2dc6148098c48ea8c1b3bf1b70528c3" target="_blank">Smoke Effect</a>
          </dt>
          <dd>by Guillermo T on Sketchfab under CC License</dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/minecraft-diamond-sword-2fd7a88f5bd44d728c2bbdd8dfc27f99" target="_blank">Diamond Sword</a>
          </dt>
          <dd>by Blender3D on Sketchfab under CC License</dd>

          <dt>
            <a href="https://poly.pizza/m/Im0kSO5tiJ" target="_blank">Stone Walkway</a>
          </dt>
          <dd>
            by Pixel on Poly Pizza under CC Licence
          </dd>
          <dt>
            <a href="https://pixabay.com/sound-effects" target="_blank">Sound Effects</a>
          </dt>
          <dd>on Pixabay under CC License</dd>
          

        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&family=Metamorphous&display=swap');

  h1 { 
    font-size: 2.5rem;
    font-family: 'MedievalSharp', cursive;
    color: #c9a959;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
  }

  a {
    color: #c9a959;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #e6c788;
  }

  .licences {
    margin: 2rem 0;
    padding: 2rem;
    font-size: 1rem;
    text-align: left;
    font-family: 'Metamorphous', serif;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid #8b7355;
    border-radius: 8px;
  }

  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #c9a959;
  }

  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9));
    background-size: cover;
    color: #d4c5a9;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: 'Metamorphous', serif;
    z-index: 10000;
    overflow: auto;
  }

  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    padding: 2rem;
  }

  #onboarding button {
    font-family: 'MedievalSharp', cursive;
    font-size: 1.3rem;
    padding: 1rem 2rem;
    background: #8b7355;
    color: #f1e6d4;
    border: 2px solid #c9a959;
    border-radius: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
  }

  #onboarding button:hover {
    background: #c9a959;
    color: #2c1810;
    transform: scale(1.05);
  }

  #onboarding li {
    font-size: 1.1rem;
    text-align: left;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #d4c5a9;
    list-style-type: none;
    position: relative;
    padding-left: 1.5em;
  }

  h4 {
    font-family: 'MedievalSharp', cursive;
    color: #c9a959;
    font-size: 1.5rem;
    margin: 1.5rem 0;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
</style>

#onboarding li {
  font-size: 1rem;
  text-align: left;
}
